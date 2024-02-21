import { useNavigate } from "react-router-dom";
import { LayoutCardInfo } from "../../components/LayoutCardInfo/LayoutCardInfo";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  return (
    <LayoutCardInfo
      onAddClick={() => {
        setOpenAdd(true);
      }}
      breadcrumb={["Modulos"]}
      title="Meus modulos"
      functionReload={true}
    />
  );
}

export { Home };
