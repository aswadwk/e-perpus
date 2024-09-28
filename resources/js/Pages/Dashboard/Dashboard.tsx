import DefaultLayout from "@/Components/Layout/DefaultLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { DollarSign } from "lucide-react";

export const Dashboard = ({ summaries }: any) => {
  return (
    <DefaultLayout>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Buku</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaries?.book}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total User</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaries?.user}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Publisher</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaries?.publisher}</div>
          </CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
