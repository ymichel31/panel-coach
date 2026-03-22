import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Practitioner } from "@/types/practitioner";

type PractitionerListProps = {
  pageTitle: string;
  data: Practitioner[];
  emptyMessage: string;
};

export function PractitionerList({ pageTitle, data, emptyMessage }: PractitionerListProps) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <PageBreadcrumb pageTitle={pageTitle} />
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {data.length === 0 ? (
                <TableRow>
                  <td colSpan={5} className="px-5 py-8 text-center text-gray-500 text-theme-sm dark:text-gray-400">
                    {emptyMessage}
                  </td>
                </TableRow>
              ) : (
                data.map((row) => (
                  <TableRow key={row.practitioner_id}>
                    <TableCell className="px-5 py-4 text-gray-800 text-theme-sm dark:text-white/90">
                      {row.first_name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.last_name}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">{row.age}</TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">
                      {row.weight_category}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-gray-500 text-theme-sm dark:text-gray-400">{row.gym}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
