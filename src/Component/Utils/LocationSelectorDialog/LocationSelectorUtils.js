import {STATUS} from "../../Constant/generalConstant";

export const locationMapperChecked = (items = []) => {
  const checked = [];

  const traverse = (item) => {
    if (item.status === STATUS.checked) {
      checked.push(item);
      return;
    }
    // If the item has children, traverse through them
    if (item.items && item.items.length > 0) {
      item.items.forEach(traverse);
    }
  };

  items.forEach(traverse);

  return checked;
};

export const isAnyChecked = (items = []) => {
  let isChecked = false;
  const traverse = (item) => {
    if (item.status === STATUS.checked) {
      isChecked = true;
      return;
    }
    if (item.items && item.items.length > 0) {
      item.items.forEach(traverse);
    }
  };

  items.forEach(traverse);

  return isChecked
};

export const setStatus = (root, status) => {
  if (Array.isArray(root)) {
    return root.map((item) => setStatus(item, status));
  }

  const newRoot = { ...root, status };

  if (Array.isArray(root.items)) {
    newRoot.items = root.items.map((item) => setStatus(item, status));
  }

  return newRoot;
};

export const computeStatus = (items) => {
  const checkedCount = items.filter(
    (item) => item.status === STATUS.checked,
  ).length;
  const indeterminateCount = items.filter(
    (item) => item.status === STATUS.indeterminate,
  ).length;

  if (checkedCount === items.length) {
    return STATUS.checked;
  } else if (checkedCount > 0 || indeterminateCount > 0) {
    return STATUS.indeterminate;
  } else {
    return STATUS.unchecked;
  }
};

export const traverse = (root, needle, status) => {
  if (Array.isArray(root)) {
    return root.map((item) => traverse(item, needle, status));
  }

  if (root.id === needle) {
    return setStatus(root, status);
  }

  if (!root.items) {
    return root;
  }

  const updatedItems = root.items.map((item) => traverse(item, needle, status));
  return {
    ...root,
    items: updatedItems,
    status: computeStatus(updatedItems),
  };
};

export const searchMapper = (items, { id, name }) => {
  return items.map((e) => {
    const mappedItem = {
      value: e[id],
      label: e[name],
    };

    if (e.children && e.children.length > 0) {
      mappedItem.children = searchMapper(e.children, { id, name });
    }

    return mappedItem;
  });
};
