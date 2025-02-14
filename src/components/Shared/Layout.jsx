import { Navigation } from "./Navigation";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <main>{children}</main>
      </main>
    </div>
  );
};
