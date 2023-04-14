import { FC, Suspense, memo } from "react";
import { ToDo } from "./modules";
import { AppProvider } from "./contexts";

const App: FC = () => {
  return (
    <Suspense fallback={<></>}>
      <AppProvider>
        <ToDo />
      </AppProvider>
    </Suspense>
  );
};

export default memo(App);
