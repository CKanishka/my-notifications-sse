import { useState } from "react";

const NotificationItem: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  const [read, setRead] = useState(false);

  return (
    <div
      className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-zinc-800 hover:text-accent-foreground / first:mt-3 / cursor-pointer / relative"
      onClick={() => setRead(true)}
    >
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{info}</p>
      </div>
      {!read && (
        <div className="w-2 h-2 / rounded-full / bg-blue-700 / absolute right-0 top-2.5" />
      )}
    </div>
  );
};

export default NotificationItem;
