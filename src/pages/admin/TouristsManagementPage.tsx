function TouristsManagementPage() {
  return (
    <section id="tourists-management" className="tourists-management">
      <div className="container p-5">
        <h2 className="title">Tourists Management</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>johndoe@gmail.com</td>
              <td>USA</td>
              <td>
                <button className="btn me-2">Edit</button>
                <button className="btn">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TouristsManagementPage;
