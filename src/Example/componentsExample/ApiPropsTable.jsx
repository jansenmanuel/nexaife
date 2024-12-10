import React, {useMemo} from "react";
import Title from "antd/lib/typography/Title";
import {Divider, Table} from "antd";
import PropTypes from "prop-types";

/**
 * ApiPropsTable component renders a table with API props information.
 *
 * This component is typically used to display the properties (props) of an API
 * in a tabular format with the provided data source and column structure.
 *
 * @component
 * @example
 * // Example usage with dataSource and columns
 * const dataSource = [
 *   {
 *     key: '1',
 *     prop: 'name',
 *     type: 'string',
 *     default: 'N/A',
 *   },
 *   {
 *     key: '2',
 *     prop: 'age',
 *     type: 'number',
 *     default: 25,
 *   },
 * ];
 *
 * const columns = [
 *     {
 *     title: "Props Name",
 *     dataIndex: "name",
 *     key: "name",
 *   },
 *   {
 *     title: 'Type',
 *     dataIndex: 'type',
 *     key: 'type',
 *   },
 *   {
 *     title: 'Default',
 *     dataIndex: 'default',
 *     key: 'default',
 *   },
 * ];
 *
 * <ApiPropsTable dataSource={dataSource} columns={columns} />
 *
 * @prop {Array<Object>} dataSource - Array of objects representing the table data.
 * @prop {Array<Object>} columns - Array defining the columns of the table (each object contains column details).
 *
 * @returns {JSX.Element} The rendered ApiPropsTable component.
 */
const ApiPropsTable = ({ dataSource, columns, title }) => {

  const titleSet = useMemo(() => {
    return title ?`| ${title}` : ''
  }, [dataSource])

  return (
    <div style={{ marginTop: 40 }}>
      <Title level={3} aria-level={3} style={{fontWeight: 'bold'}}>
        Props {titleSet}
      </Title>
      <Divider style={{ marginTop: 2 }} />
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
};

// Default props if none are provided
ApiPropsTable.defaultProps = {
  dataSource: [],
  columns: [],
  title: ''
};

// Define expected prop types
ApiPropsTable.propTypes = {
  /**
   * The data source for the table, which is an array of objects.
   */
  dataSource: PropTypes.array,

  /**
   * The columns configuration for the table, which is an array of objects.
   */
  columns: PropTypes.array,
  /**
   * The title part for the table, which is a string.
   */
  title: PropTypes.string,
};

export default ApiPropsTable;
