import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
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

const CreditRating = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Credit Rating",
      icon: Star,
      color: "yellow",
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

      .active-tab-yellow {
        background-color: #fbbf24; /* Yellow 500 */
        color: white;
        box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
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

      .credit-container {
        margin-top: 2rem;
        background: #f9fafb; /* Light Gray */
        border: 1px solid #e2e8f0; /* Gray 300 */
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        width: 100%;
        max-width: 400px;
      }

      .credit-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #2d3748; /* Gray 800 */
      }

      .credit-container:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
      }

      @media (max-width: 1024px) {
        .credit-container {
          flex-basis: calc(100% - 1rem); /* Full width on smaller screens */
        }
      }

      @media (max-width: 640px) {
        .credit-container {
          flex-basis: 100%; /* Full width on small screens */
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
                <Star className="content-icon text-yellow-500" />
                Credit Rating
              </h2>

              <div className="credit-container">
                <div className="credit-title">
                  <a
                    onClick={() =>
                      window.open(`/Credit-Rating-2023.pdf`, "_blank")
                    }
                  >
                  Current Credit Rating: AA+
                  </a>
                </div>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default CreditRating;
