function Restart() {
  function refresh() {
    window.location.reload(false);
  }
  return (
    <button className="restart" onClick={refresh}>
      Restart
    </button>
  );
}
export default Restart;
