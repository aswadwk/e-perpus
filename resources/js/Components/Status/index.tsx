import { Badge } from "../ui/badge";

const statusColor = {
    success: "bg-green-500 hover:bg-green-600",
    danger: "bg-red-500 hover:bg-red-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    default: "bg-gray-500 hover:bg-gray-600",
    blueSky: "bg-blue-500 hover:bg-blue-600",
};

export default function Status({ status }: Readonly<{ status: string }>) {
    switch (status) {
        case "inactive":
        case "free":
            return (
                <Badge className={statusColor.warning + " capitalize"}>
                    {status}
                </Badge>
            );
        case "active":
        case "premium":
        case "business":
        case "quick expense":
        case "google":
        case "ids":
            return (
                <Badge className={statusColor.success + " capitalize"}>
                    {status}
                </Badge>
            );
        case "netzme":
        case "smart scan":
            return (
                <Badge className={statusColor.blueSky + " capitalize"}>
                    {status}
                </Badge>
            );
        case "ocbc":
            return (
                <Badge className={statusColor.danger + " capitalize"}>
                    {status}
                </Badge>
            );
        default:
            return (
                <Badge className={statusColor.default + " capitalize"}>
                    {status}
                </Badge>
            );
    }
}
