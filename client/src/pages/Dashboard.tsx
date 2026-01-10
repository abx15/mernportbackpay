import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LayoutDashboard,
  MessageSquare,
  ShoppingCart,
  Cpu,
  Plus,
  Trash2,
} from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    messages: 0,
    orders: 0,
    aiRequests: 0,
    projects: 0,
  });
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    // Fetch count logic would go here
    setStats({ messages: 12, orders: 5, aiRequests: 8, projects: 4 });
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen flex flex-col md:flex-row gap-12">
      {/* Sidebar */}
      <div className="w-full md:w-64 space-y-4">
        {[
          "Overview",
          "Messages",
          "Orders",
          "AI Requests",
          "Manage Projects",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full h-14 px-6 rounded-2xl font-bold text-sm flex items-center gap-3 transition-all ${
              activeTab === tab
                ? "bg-primary text-primary-foreground"
                : "bg-muted/50 hover:bg-muted"
            }`}
          >
            {tab === "Overview" && <LayoutDashboard size={20} />}
            {tab === "Messages" && <MessageSquare size={20} />}
            {tab === "Orders" && <ShoppingCart size={20} />}
            {tab === "AI Requests" && <Cpu size={20} />}
            {tab === "Manage Projects" && <Plus size={20} />}
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">
          {activeTab}
        </h2>

        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              label="Total Messages"
              value={stats.messages}
              icon={<MessageSquare />}
            />
            <StatCard
              label="Service Orders"
              value={stats.orders}
              icon={<ShoppingCart />}
            />
            <StatCard
              label="AI Requests"
              value={stats.aiRequests}
              icon={<Cpu />}
            />
            <StatCard label="Projects" value={stats.projects} icon={<Plus />} />
          </div>
        )}

        {/* Placeholder for list views */}
        {activeTab !== "Overview" && (
          <div className="p-12 rounded-[2.5rem] border-2 border-dashed border-border flex flex-col items-center justify-center text-center">
            <p className="text-muted-foreground text-lg font-medium">
              Content for {activeTab} will be listed here. Connect to backend
              APIs to see live data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, icon }: any) => (
  <div className="p-8 rounded-[2rem] bg-card border border-border">
    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
      {icon}
    </div>
    <p className="text-muted-foreground font-bold uppercase tracking-wider text-xs mb-1">
      {label}
    </p>
    <p className="text-4xl font-black">{value}</p>
  </div>
);

export default Dashboard;
