type Column<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function Table<T extends object>({ columns, data }: TableProps<T>) {
  return (
    <table className="w-full border-collapse rounded shadow-md overflow-hidden text-center">
      <thead className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-md text-white">
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} className="px-4 py-2">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="even:bg-gradient-to-r from-blue-50 to-cyan-50">
            {columns.map((col) => (
              <td key={String(col.key)} className="px-4 py-2">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
