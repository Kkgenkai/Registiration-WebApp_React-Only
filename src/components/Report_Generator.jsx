import Report_Table from "./Report_Table";

export default function Report_Generator({regData, displayData}) {
  return (
    <>
      {displayData && <Report_Table regData={regData}/>}
    </>
  );
}