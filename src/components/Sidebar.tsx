import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, LayoutDashboard, Milestone, CheckSquare, Building2, FolderKanban } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: FolderKanban, label: 'Projects', path: '/projects' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: CheckSquare, label: 'Tasks', path: '/tasks' },
    { icon: Milestone, label: 'Milestones', path: '/milestones' },
  ];

  return (
    <div className="w-64 bg-slate-800 text-white p-6">
      <div className="flex items-center gap-3 mb-8">
        <Building2 className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">BuildAI Pro</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;