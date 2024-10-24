import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench } from "lucide-react"; // Only keeping necessary icon
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

const SharePosition = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Share Holding Position",
      icon: Wrench,
      color: "rose",
    },
  ];

  useEffect(() => {
    const styles = `
  .main-container {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%; /* Ensure it doesn't overflow on smaller screens */
  margin: 0 auto;
}

.tab-navigation {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  background-color: white;
  color: #4a5568; /* Gray 700 */
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.active-tab-rose {
  background-color: #f43f5e; /* Rose 500 */
  color: white;
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: black; /* Set text color for the table to black */
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f7fafc; /* Light Gray */
  color: black; /* Set header text color to black */
}

/* Responsive styles */
@media (max-width: 1024px) {
  /* Adjust padding for medium screens (tablets, smaller laptops) */
  .main-container {
    padding: 1.5rem;
  }

  .content-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 768px) {
  /* Adjust padding and flex behavior for mobile screens */
  .main-container {
    padding: 1rem;
  }

  .tab-navigation {
    flex-direction: column; /* Stack tabs vertically on smaller screens */
    align-items: center;
  }

  .tab-button {
    padding: 0.75rem 1rem;
    font-size: 0.875rem; /* Slightly smaller text */
  }

  .content-title {
    font-size: 1.5rem;
  }

  table {
    font-size: 0.9rem; /* Reduce table font size for mobile */
  }

  th,
  td {
    padding: 6px; /* Adjust padding for smaller cells */
  }
}

@media (max-width: 480px) {
  /* Extra small screens (mobile phones) */
  .main-container {
    padding: 0.5rem;
  }

  .tab-button {
    font-size: 0.75rem; /* Smaller text size */
    padding: 0.5rem 0.75rem;
  }

  .content-title {
    font-size: 1.25rem;
  }

  table {
    font-size: 0.8rem; /* Further reduce table font size */
  }

  th,
  td {
    padding: 4px;
  }

  /* Consider allowing horizontal scrolling for very small screens */
  table {
    display: block;
    overflow-x: auto;
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
                    isActive ? `active-tab-${tab.color}` : ""
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
                <Wrench className="content-icon text-rose-500" />
                Share Holding Position
              </h2>

              {/* Shareholding Data */}
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Sponsor/Director</th>
                    <th>Govt</th>
                    <th>Institute</th>
                    <th>Foreign</th>
                    <th>Public</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>June 30, 2024</td>
                    <td>36.061</td>
                    <td>0.00</td>
                    <td>37.235</td>
                    <td>0.019</td>
                    <td>26.685</td>
                  </tr>
                  <tr>
                    <td>May 31, 2024</td>
                    <td>36.061</td>
                    <td>0.00</td>
                    <td>37.048</td>
                    <td>0.019</td>
                    <td>26.872</td>
                  </tr>
                  <tr>
                    <td>April 30, 2024</td>
                    <td>36.060</td>
                    <td>0.00</td>
                    <td>35.566</td>
                    <td>0.022</td>
                    <td>28.651</td>
                  </tr>
                  <tr>
                    <td>March 31, 2024</td>
                    <td>36.060</td>
                    <td>0.00</td>
                    <td>33.680</td>
                    <td>0.057</td>
                    <td>30.202</td>
                  </tr>
                  <tr>
                    <td>February 29, 2024</td>
                    <td>36.060</td>
                    <td>0.00</td>
                    <td>33.136</td>
                    <td>0.057</td>
                    <td>30.746</td>
                  </tr>
                  <tr>
                    <td>January 31, 2024</td>
                    <td>36.060</td>
                    <td>0.00</td>
                    <td>38.520</td>
                    <td>0.020</td>
                    <td>25.400</td>
                  </tr>
                </tbody>
              </table>

              {/* Summary Section in Table Format */}
              <h3 className="summary-title">Summary</h3>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Face Value per Share</td>
                    <td>Tk. 10.00</td>
                  </tr>
                  <tr>
                    <td>Total Shares</td>
                    <td>68,166,122</td>
                  </tr>
                  <tr>
                    <td>Net Asset Value (NAV) as of 31.03.2024</td>
                    <td>Tk. 141,76,59,106</td>
                  </tr>
                  <tr>
                    <td>NAV Per Share as of 31.03.2024</td>
                    <td>Tk. 20.80</td>
                  </tr>
                  <tr>
                    <td>Earnings Per Share (EPS) as of 31.03.2024</td>
                    <td>Tk. 0.85</td>
                  </tr>
                  <tr>
                    <td>
                      Net Operating Cash Flows Per Share (NOCFS) as of
                      31.03.2024
                    </td>
                    <td>Tk. 0.79</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default SharePosition;
