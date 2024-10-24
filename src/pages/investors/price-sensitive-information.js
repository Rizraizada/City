import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign } from "lucide-react";
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

const PriceSensitiveInfo = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Price Sensitive Information",
      icon: DollarSign,
      color: "emerald",
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

      .active-tab-emerald {
        background-color: #10b981; /* Emerald 500 */
        color: white;
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
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

      .year-container {
        margin-top: 2rem;
        background: #f9fafb; /* Light Gray */
        border: 1px solid #e2e8f0; /* Gray 300 */
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .year-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #2d3748; /* Gray 800 */
      }

      .quarterly-reports {
        display: flex;
        flex-direction: column; /* Reports in column */
        gap: 0.5rem; /* Space between reports */
      }

      .report-item {
        color: #1d4ed8; /* Blue 600 */
        cursor: pointer;
        text-decoration: underline;
        margin: 0.5rem 0;
      }

      .report-item:hover {
        text-decoration: none;
      }

      .years-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
      }

      .year-container:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
      }

      .year-container {
        flex-basis: calc(33.333% - 1rem); /* 3 divs per row */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      @media (max-width: 1024px) {
        .year-container {
          flex-basis: calc(50% - 1rem); /* 2 divs per row on medium screens */
        }
      }

      @media (max-width: 640px) {
        .year-container {
          flex-basis: 100%; /* 1 div per row on small screens */
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
                <DollarSign className="content-icon text-emerald-500" />
                Price Sensitive Information
              </h2>

              <div className="years-container">
                {/* Year: 2016 */}
                <div className="year-container">
                  <div className="year-title">Year: 2016</div>
                  <div className="quarterly-reports">
                    <div className="report-item">
                      <a
                        onClick={() =>
                          window.open(`/path/to/price-sensitive-2016-Q1.pdf`, "_blank")
                        }
                      >
                        1. Q1 2016 PSI
                      </a>
                    </div>
                    <div className="report-item">
                      <a
                        onClick={() =>
                          window.open(`/path/to/price-sensitive-2016-Q2.pdf`, "_blank")
                        }
                      >
                        2. Q2 2016 PSI
                      </a>
                    </div>
                    <div className="report-item">
                      <a
                        onClick={() =>
                          window.open(`/path/to/price-sensitive-2016-Q3.pdf`, "_blank")
                        }
                      >
                        3. Q3 2016 PSI
                      </a>
                    </div>
                  </div>
                </div>

                {/* Year: 2017 */}
                <div className="year-container">
                  <div className="year-title">Year: 2017</div>
                  <div className="quarterly-reports">
                    <div className="report-item">
                      <a
                        onClick={() =>
                          window.open(`/path/to/price-sensitive-2017-Q1.pdf`, "_blank")
                        }
                      >
                        1. Q1 2017 PSI
                      </a>
                    </div>
                    <div className="report-item">
                      <a
                        onClick={() =>
                          window.open(`/path/to/price-sensitive-2017-Q2.pdf`, "_blank")
                        }
                      >
                         2. Q2 2017 PSI
                      </a>
                    </div>
                    <div className="report-item">
                      <a
                        onClick={() =>
                          window.open(`/path/to/price-sensitive-2017-Q3.pdf`, "_blank")
                        }
                      >
                         3. Q3 2017 PSI
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional years can be added here */}
                {[2018, 2019, 2020, 2021, 2022, 2023, 2024].map((year) => (
                  <div key={year} className="year-container">
                    <div className="year-title">Year: {year}</div>
                    <div className="quarterly-reports">
                      <div className="report-item">
                        <a
                          onClick={() =>
                            window.open(
                              `/path/to/price-sensitive-${year}-Q1.pdf`,
                              "_blank"
                            )
                          }
                        >
                          1. Q1 {year} PSI
                        </a>
                      </div>
                      <div className="report-item">
                        <a
                          onClick={() =>
                            window.open(
                              `/path/to/price-sensitive-${year}-Q2.pdf`,
                              "_blank"
                            )
                          }
                        >
                          2. Q2 {year} PSI
                        </a>
                      </div>
                      <div className="report-item">
                        <a
                          onClick={() =>
                            window.open(
                              `/path/to/price-sensitive-${year}-Q3.pdf`,
                              "_blank"
                            )
                          }
                        >
                          3. Q3 {year} PSI
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default PriceSensitiveInfo;
