export type technologiesProps = {
    name: string;
}

const List = ({ technologies }: { technologies: technologiesProps[] }) => (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th className="px-6 py-3">
                Tecnologia
            </th>
        </tr>
        </thead>
        <tbody>
        {technologies.length === 0 && (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Nenhuma tecnologia foi adicionada
                </td>
            </tr>
        )}
        {technologies.map(tech => (
            <tr key={tech.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {tech.name}
                </td>
            </tr>
        ))}
        </tbody>
    </table>
)

export default List;
