import { ThemeProvider } from "@/Components/ThemeProvider";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Head, Link, useForm } from "@inertiajs/react";
import { Provider } from "react-redux";

export default function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    post(route("web.auth.doLogin"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <>
      <Head title="Login" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <div className="hidden bg-muted lg:block">
            <img
              src="/placeholder.svg"
              alt="placeholder"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Masuk</h1>
                <p className="text-balance text-muted-foreground">
                  Masukkan email dan password Anda
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Masukkan email anda"
                      required
                      value={data.email}
                      onChange={(e) => setData("email", e.target.value)}
                      tabIndex={0}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="grid gap-2 mb-4">
                    <Input
                      id="password"
                      type="password"
                      required
                      placeholder="Masukkan password anda"
                      value={data.password}
                      onChange={(e) => setData("password", e.target.value)}
                      tabIndex={0}
                    />
                  </div>
                  <Button type="submit" className="w-full" tabIndex={0}>
                    Masuk
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
