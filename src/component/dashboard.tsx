
import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Users,
  Settings,
  Plus,
  MoreHorizontal,
  CalendarDays,
} from "lucide-react";

const tasks = [
  {
    title: "Design homepage",
    project: "Website Redesign",
    status: "Completed",
    color: "green",
    initials: "AS",
  },
  {
    title: "Create API endpoints",
    project: "Backend Development",
    status: "In Progress",
    color: "blue",
    initials: "RK",
  },
  {
    title: "Fix login page",
    project: "Authentication",
    status: "To Do",
    color: "orange",
    initials: "SV",
  },
];

export default function DashboardPreview() {
  return (
    <div className="dashboard">
      <aside className="dashboard-sidebar">
        <div className="dash-brand">
          <LayoutDashboard size={20} />
          <span>Workspace</span>
        </div>

        <p className="sidebar-label">MENU</p>

        <div className="dash-nav active">
          <LayoutDashboard size={17} />
          Dashboard
        </div>

        <div className="dash-nav">
          <FolderKanban size={17} />
          Projects
        </div>

        <div className="dash-nav">
          <CheckSquare size={17} />
          My Tasks
        </div>

        <div className="dash-nav">
          <Users size={17} />
          Team
        </div>

        <div className="dash-nav">
          <Settings size={17} />
          Settings
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="dash-topbar">
          <span>Workspace / Overview</span>
          <div className="dash-avatar">SV</div>
        </div>

        <div className="dash-heading">
          <div>
            <h3>Good morning, Sam!</h3>
            <p>Here's what's happening with your projects.</p>
          </div>

          <button className="dash-create">
            <Plus size={15} />
            New Project
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <span>Total Projects</span>
            <h2>12</h2>
            <small>Across your workspace</small>
          </div>

          <div className="stat-card">
            <span>Active Tasks</span>
            <h2>28</h2>
            <small>Currently in progress</small>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <h2>84</h2>
            <small>Tasks completed</small>
          </div>
        </div>

        <div className="task-section">
          <div className="task-heading">
            <h3>Recent Tasks</h3>
            <button>View all</button>
          </div>

          <div className="task-table">
            <div className="task-row task-header">
              <span>Task</span>
              <span>Project</span>
              <span>Status</span>
              <span>Assigned</span>
            </div>

            {tasks.map((task) => (
              <div className="task-row" key={task.title}>
                <span className="task-title">
                  <CheckSquare size={15} />
                  {task.title}
                </span>

                <span>{task.project}</span>

                <span>
                  <span className={`status ${task.color}`}>
                    {task.status}
                  </span>
                </span>

                <span className="task-user">
                  {task.initials}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="dash-bottom">
          <span>
            <CalendarDays size={14} />
            Last updated today
          </span>
          <MoreHorizontal size={18} />
        </div>
      </main>
    </div>
  );
}
