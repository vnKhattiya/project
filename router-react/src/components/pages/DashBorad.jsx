import React from 'react';

const DashBorad = () => {
  // Sample data for the dashboard
  const recentOrders = [
    { id: 1, customer: "Alice Green", amount: "450 THB", status: "Completed", email: "alice@example.com", date: "2024-02-15", product: "Premium Package" },
    { id: 2, customer: "Tom Harris", amount: "300 THB", status: "Pending", email: "tom@example.com", date: "2024-02-14", product: "Basic Package" },
    { id: 3, customer: "Sarah Johnson", amount: "550 THB", status: "Completed", email: "sarah@example.com", date: "2024-02-13", product: "Enterprise Solution" },
    { id: 4, customer: "David Lee", amount: "100 THB", status: "Cancelled", email: "david@example.com", date: "2024-02-12", product: "Basic Package" },
    { id: 5, customer: "Emily Brown", amount: "400 THB", status: "Completed", email: "emily@example.com", date: "2024-02-11", product: "Premium Package" },
    { id: 6, customer: "Mark Taylor", amount: "600 THB", status: "Processing", email: "mark@example.com", date: "2024-02-10", product: "Enterprise Solution" },
    { id: 7, customer: "Samantha Carter", amount: "250 THB", status: "Completed", email: "samantha@example.com", date: "2024-02-09", product: "Basic Package" },
    { id: 8, customer: "Chris Evans", amount: "150 THB", status: "Pending", email: "chris@example.com", date: "2024-02-08", product: "Premium Package" },
    { id: 9, customer: "Jessica White", amount: "700 THB", status: "Completed", email: "jessica@example.com", date: "2024-02-07", product: "Enterprise Solution" },
    { id: 10, customer: "Brian Wilson", amount: "220 THB", status: "Cancelled", email: "brian@example.com", date: "2024-02-06", product: "Basic Package" }
  ];

  const stats = [
    { title: "Total Sales", value: "25,250 THB", change: "+14%" },
    { title: "Total Orders", value: "530", change: "+10%" },
    { title: "Average Order", value: "103 THB", change: "+5%" },
    { title: "Customers", value: "2,150", change: "+18%" },
    { title: "Pending Orders", value: "40", change: "-5%" },
    { title: "Completed Orders", value: "450", change: "+12%" },
    { title: "Cancelled Orders", value: "20", change: "-2%" },
    { title: "Total Revenue", value: "$58,750", change: "+20%" },
    { title: "Returning Customers", value: "1,050", change: "+10%" },
    { title: "Average Product Rating", value: "4.7/5", change: "+0.5%" }
  ];


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 d-none d-md-block bg-white min-vh-100 p-3 shadow">
          <h5 className="text-dark">Control Panel</h5>
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <a className="nav-link text-dark active" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Purchases</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Items</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Preferences</a>
            </li>
          </ul>
        </div>


        {/* Main content */}
        <div className="col-md-10 p-4">
          {/* Header */}
          <div className="d-flex justify-content-center align-items-center mb-4">
            <h1 className="text-success fw-bold">Overview</h1>
          </div>


          {/* Stats cards */}
          <div className="row mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card h-100" style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h6 className="card-subtitle mb-2 text-muted">{stat.title}</h6>
                    <h3 className="card-title mb-0 text-center">{stat.value}</h3>
                    <div className="d-flex justify-content-end mt-auto">
                      <span className={`${stat.change.includes('+') ? 'text-success' : 'text-danger'
                        } fw-bold fs-6`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* Table */}
          <div className="card">
            <div className="card-header bg-white">
              <h5 className="mb-0 text-center">New update</h5>
            </div>

            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Email</th>
                      <th>Product</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td>#{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.email}</td>
                        <td>{order.product}</td>
                        <td>{order.amount}</td>
                        <td>{order.date}</td>
                        <td>
                          <span className={`badge ${order.status === 'Completed' ? 'bg-success' :
                            order.status === 'Pending' ? 'bg-warning' :
                              'bg-info'
                            }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBorad;