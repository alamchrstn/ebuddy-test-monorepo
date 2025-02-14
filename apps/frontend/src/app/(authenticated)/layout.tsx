import { Provider } from "react-redux";
import { store } from "@frontend-app/store/store";

export default function AuthenticatedLayout({
  children,
}: React.PropsWithChildren) {
  <Provider store={store}>{children}</Provider>;
}
