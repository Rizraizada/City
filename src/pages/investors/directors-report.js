import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";
import Dropdiv from "@/components/Dropdiv";

const TabContent = ({ children, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ margin: "70px" }}
        className="tab-content"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const DirectorsReport = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Directors Report",
      icon: FileText,
      color: "blue",
    },
  ];

  useEffect(() => {
    const styles = `
      .main-container {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        border-radius: 1rem;
        padding: 2rem;
        transition: box-shadow 0.3s;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }

      .tab-navigation {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        margin-bottom: 1.5rem;
      }

      .tab-button {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 500;
        background-color: white;
        color: #4a5568; /* Gray 700 */
        transition: all 0.3s ease;
        border: 2px solid transparent;
      }

      .inactive-tab {
        color: #4a5568; /* Gray 700 */
      }

      .active-tab-blue {
        background-color: #3b82f6; /* Blue 500 */
        color: white;
        box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
      }

      .tab-icon {
        width: 1.25rem;
        height: 1.25rem;
      }

      .active-border {
        position: absolute;
        inset: 0;
        border: 2px solid white;
        border-radius: 0.5rem;
      }

      .content-title {
        font-size: 2rem;
        font-weight: bold;
        color: #2d3748; /* Gray 800 */
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }

      .report-container {
        margin-top: 2rem;
        background: #f9fafb; /* Light Gray */
        border: 1px solid #e2e8f0; /* Gray 300 */
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .report-item {
        margin: 0.5rem 0;
        cursor: pointer;
        text-decoration: underline;
        color: #1d4ed8; /* Blue 600 */
      }

      .report-item:hover {
        text-decoration: none;
        color: #1e40af; /* Darker Blue */
      }

      @media (max-width: 640px) {
        .report-container {
          width: 100%; /* Full width on small screens */
        }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <Dropdiv />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="main-container">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`tab-button ${
                    isActive ? `active-tab-${tab.color}` : "inactive-tab"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    className={`tab-icon ${
                      isActive ? "text-white" : `text-${tab.color}-500`
                    }`}
                  />
                  <span>{tab.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeBorder"
                      className="active-border"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Tab Content */}
          <TabContent isActive={activeTab === "tab1"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="content-title">
                <FileText className="content-icon text-blue-500" />
                Directors Report
              </h2>

              <div className="report-container">
                <div className="report-item" onClick={() => window.open(`/Directors-Report.pdf`, "_blank")}>
                  Directors Report 2023
                </div>
          
                {/* Additional reports can be added here */}
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default DirectorsReport;