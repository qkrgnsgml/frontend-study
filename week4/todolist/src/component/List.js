export default function List() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div>
        <h1>To do list</h1>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <span>
            <input type="text" />
          </span>
          <span>
            <input type="submit" value="+" />
          </span>
        </form>
      </div>
      <div>
        <ul id="list"></ul>
      </div>
    </div>
  );
}
