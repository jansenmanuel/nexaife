import { Select } from "antd";

const SizeChanger = ({ pageSizeOptions, pageSize, onPageSizeChange }) => {
  return (
    <Select
      defaultValue={pageSize}
      onSelect={(value) => onPageSizeChange(1, parseInt(value, 10))}
      className="custom-select"
    >
      {pageSizeOptions.map((option) => (
        <Select.Option key={option} value={option}>
          {option}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SizeChanger;
