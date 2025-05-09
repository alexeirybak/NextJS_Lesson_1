import { ServerComponentOne } from "@/components/server-component-one";

import { ClientComponentOne } from "@/components/client-component-one";

export default function CommonComponent() {
  return (
    <>
      <h1>Общий компонент</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
