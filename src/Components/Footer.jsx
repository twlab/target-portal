export default function Footer() {
  return (
    <footer className="text-black bg-stone-300 p-4">
      <div className="text-center">
        <a href="https://target.wustl.edu">
          <u>TaRGET DCC</u>
        </a>
        {" - "}
        Washington University in St.Louis &copy; {new Date().getFullYear()}
      </div>
    </footer>
  );
}
