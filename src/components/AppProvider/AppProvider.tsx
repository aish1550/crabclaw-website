import React, { createContext, useContext, FC, ComponentProps } from "react";

type AppContextProps = {
  appName: string;
  globalMetaDescription: string;
};

type AppProviderProps = ComponentProps<"div">;

export const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        appName: process.env.NEXT_PUBLIC_APP_NAME || "AppName",
        globalMetaDescription:
          process.env.NEXT_PUBLIC_GLOBAL_META_DESCRIPTION || "Description",
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Use of useApp outside of AppProvider won't work");
  }

  return context;
};

export default AppProvider;
