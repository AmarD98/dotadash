import { Button } from "@/components/ui/button";
import { updateProfile } from "./actions";

export default function RefreshButton() {
  return (
    <div>
      <Button variant={"secondary"} onClick={updateProfile}>
        Refresh
      </Button>
    </div>
  );
}
