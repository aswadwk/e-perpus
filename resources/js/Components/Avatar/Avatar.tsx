import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";

export default function AvatarCustom({ url }: any) {
  return (
    <Avatar>
      <AvatarImage src={url} alt="user-avatar" />
      <AvatarFallback>X</AvatarFallback>
    </Avatar>
  );
}
