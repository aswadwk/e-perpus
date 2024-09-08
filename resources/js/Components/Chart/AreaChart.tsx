import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/Components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";

const chartConfig = {
    user: {
        label: "User",
        color: "hsl(var(--chart-2))",
    },
    expense: {
        label: "Expense",
        color: "hsl(var(--chart-1))",
    },
    smart: {
        label: "Smart Scan",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;

type ChartProps = {
    title?: string;
    description?: string;
    items: {
        date: string;
        user?: number;
        expense?: number;
        smart?: number;
    }[];
    onChangeTimeRange?: (value: string) => void;
    timeRange?: string;
    dataKey: string;
};

export default function AreaChartCustom({
    title = "Area Chart - Interactive",
    description = "Showing total visitors for the last 3 months",
    items,
    onChangeTimeRange,
    timeRange = "90d",
    dataKey,
}: Readonly<ChartProps>) {
    return (
        <Card>
            <CardHeader className="flex items-center gap-2 py-5 space-y-0 border-b sm:flex-row">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
                <Select value={timeRange} onValueChange={onChangeTimeRange}>
                    <SelectTrigger
                        className="w-[160px] rounded-lg sm:ml-auto"
                        aria-label="Select a value"
                    >
                        <SelectValue placeholder="Last 3 months" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        <SelectItem value="90" className="rounded-lg">
                            Last 3 months
                        </SelectItem>
                        <SelectItem value="30" className="rounded-lg">
                            Last 30 days
                        </SelectItem>
                        <SelectItem value="7" className="rounded-lg">
                            Last 7 days
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <AreaChart data={items}>
                        <defs>
                            <linearGradient
                                id="fillUser"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-user)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-user)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                            {/* <linearGradient
                                id="fillMobile"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-mobile)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient> */}
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return date.toLocaleDateString("id-ID", {
                                    month: "short",
                                    day: "numeric",
                                });
                            }}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => {
                                        return new Date(
                                            value
                                        ).toLocaleDateString("id-ID", {
                                            month: "short",
                                            day: "numeric",
                                        });
                                    }}
                                    indicator="dot"
                                />
                            }
                        />
                        <Area
                            dataKey={dataKey}
                            type="natural"
                            // fill="url(#fillUser)"
                            // stroke="var(--color-user)"
                            fill={`url(#fill${dataKey})`}
                            stroke={`var(--color-${dataKey})`}
                            stackId="a"
                            fillOpacity={0.4}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
