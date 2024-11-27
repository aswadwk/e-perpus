import DefaultLayout from "@/Components/Layout/DefaultLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Head } from "@inertiajs/react";
import { DollarSign } from "lucide-react";

export const Dashboard = ({ summaries }: any) => {
  return (
    <DefaultLayout>
      <Head title="Dashboard" />
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
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Pinjam</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summaries?.borrow}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col items-center justify-center gap-2 mt-10">
        <img width="100" src="/logo.png" alt="" />
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
            Ruang Baca Jurusan Administrasi Niaga
          </h1>
          <p>Politeknik Negeri Ujung Pandang</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
