import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, AlertCircle } from "lucide-react";
import Dropdiv from "@/components/Dropdiv"; // Adjust the path based on your project structure

const TabContent = ({ children, isActive }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ margin: "70px" }} // Use style attribute for margins
        className="tab-content"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const PolicyPoint = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    className="policy-point"
  >
    <AlertCircle className="alert-icon" />
    <p className="policy-text">{children}</p>
  </motion.div>
);

const marinehull = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Marine-Hull Insurance",
      icon: Wrench,
      color: "rose",
    },
  ];

  useEffect(() => {
    const styles = `
 /* Global Styles */
.main-container {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  transition: box-shadow 0.3s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 100%;
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
  text-align: center;
}

.inactive-tab {
  color: #4a5568; /* Gray 700 */
}

.active-tab-rose {
  background-color: #f43f5e; /* Rose 500 */
  color: white;
  box-shadow: 0 0 10px rgba(244, 63, 94, 0.5);
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
  text-align: center;
}

.content-icon {
  width: 1.75rem;
  height: 1.75rem;
}

.policy-points {
  margin-top: 1rem;
}

.policy-point {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.alert-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: #3b82f6; /* Blue 500 */
  margin-top: 0.25rem;
}

.policy-text {
  color: #2d3748; /* Gray 800 */
  line-height: 1.6;
}

.exclusion-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748; /* Gray 800 */
  margin-bottom: 0.5rem;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .main-container {
    padding: 1.5rem;
  }

  .tab-button {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .content-title {
    font-size: 1.75rem;
  }

  .content-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media (max-width: 992px) {
  .main-container {
    padding: 1.25rem;
  }

  .tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }

  .content-title {
    font-size: 1.5rem;
  }

  .content-icon {
    width: 1.25rem;
    height: 1.25rem;
  }
}

@media (max-width: 768px) {
  .main-container {
    padding: 1rem;
  }

  .tab-navigation {
    flex-direction: column;
    gap: 0.75rem;
  }

  .tab-button {
    padding: 0.5rem;
    font-size: 0.8rem;
  }

  .content-title {
    font-size: 1.25rem;
  }

  .content-icon {
    width: 1rem;
    height: 1rem;
  }
}

@media (max-width: 576px) {
  .main-container {
    padding: 0.75rem;
  }

  .tab-button {
    padding: 0.4rem;
    font-size: 0.75rem;
  }

  .content-title {
    font-size: 1rem;
  }

  .content-icon {
    width: 0.85rem;
    height: 0.85rem;
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
                <Wrench className="content-icon text-rose-500" />
                Marine-Hull
              </h2>

              <div className="policy-points">
                <PolicyPoint>
                  If there is any material misdescription of any of the property
                  hereby insured, the company shall not be liable for any loss
                  or damage resulting therefrom.
                </PolicyPoint>

                <PolicyPoint>
                    Protects your vessel for smooth sailing. <br />
                    What is Marine Hull
                    <br />
                    It is a plan that provides you with coverage for your vessel
                    during its operation within the specified trading limits.
                    <br />
                    Why Marine Hull Benefits us are as follows-
                    <br />
                    Institute Time Clauses (Hull) Comprehensive cover for vessel
                    <br />
                    Your vessel is covered during operation within specified
                    trading limits.
                    <br />
                    Partial Loss and Total Loss of your vessel.
                    <br />
                    Institute Time Clauses (Total Loss only)
                    <br />
                    Your vessel is covered during operation within specified
                    trading limits.
                    <br />
                    Total Loss (Actual Total Loss and Constructive Total Loss)
                    of your vessel caused by:
                    <br />
                    PERILS at a glance
                    <br />
                    This insurance covers loss of or damage to the
                    subject-matter insured caused by
                    <br />
                    perils of the inland rivers lakes or other navigable waters.
                    <br />
                    fire, explosion.
                    <br />
                    violent theft by persons from outside the vessel.
                    <br />
                    breakdown of or accident to nuclear installations or
                    reactors.
                    <br />
                    contact with aircraft or similar object, or objects falling
                    therefrom, land conveyance, dock or harbour equipment or
                    installation.
                    <br />
                    earthquake volcanic eruption or lightning.
                    <br />
                    This insurance covers loss of or damage to the
                    subject-matter insured caused by accidents in loading
                    discharging or shifting cargo or fuel
                    <br />
                    bursting of boilers breakage of shafts or any latent defect
                    in the machinery or hull negligence of Master Officers Crew
                    or Pilots
                    <br />
                    negligence of repairers or charterers provided such
                    repairers or charterers are not an Assured hereunder
                    <br />
                    barratry of Master Officers or Crew, provided such loss or
                    damage has not resulted from want of due diligence by the
                    Assured, Owners or
                    <br />
                    Master Officers Crew or Pilots not to be considered Owners
                    within the meaning of this Clause 6 should they hold shares
                    in the
                    <br />
                    How much is my premium?
                    <br />
                    Your premium may vary, depending on
                    <br />
                    The type of cover selected
                    <br />
                    Type of your vessels
                    <br />
                    Age of your vessels
                    <br />
                    Any additional cover selected
                    <br />
                    The sum insured
                    <br />
                    Our underwriting requirements
                    <br />
                    WAR EXCLUSION
                    <br />
                    In no case shall this insurance cover loss damage liability
                    or expense caused by
                    <br />
                    war civil war revolution rebellion insurrection, or civil
                    strife arising therefrom, or any hostile act by or against a
                    belligerent
                    <br />
                    capture seizure arrest restraint or detainment (barratry and
                    piracy excepted), and the consequences thereof or any
                    attempt
                    <br />
                    derelict mines torpedoes bombs or other derelict weapons of
                    <br />
                    STRIKES EXCLUSION
                    <br />
                    In no case shall this insurance cover loss damage liability
                    or expense caused by
                    <br />
                    strikers, locked-out workmen, or persons taking part in
                    labour disturbances, riots or civil commotions.
                    <br />
                    any terrorist or any person acting from a political
                    <br />
                    MALICIOUS ACTS EXCLUSION
                    <br />
                    In no case shall this insurance cover loss damage liability
                    or expense arising from
                    <br />
                    the detonation of an
                    <br />
                    any weapon of and caused by any person acting maliciously or
                    From a political motive.
                    <br />
                    NUCLEAR EXCLUSION In no case shall this insurance cover loss
                    damage liability or expense arising from any weapon of war
                    employing atomic or nuclear fission and/or fusion or other
                    like reaction or radioactive force or matter. CANCELLATION
                    RETURNS
                    <br />
                    Police(s) may be cancelled allowing prorate monthly return
                    of premium for each un-mommenced month but subject to a{" "}
                    <br />
                    minimum retention of 25% of the annual premium. NOTICE OF
                    CLAIM AND TENDERS
                    <br />
                    In the event of accident whereby loss or damage may result
                    in a claim under this insurance, notice shall be given to
                    the Underwriters prior to survey and also, if the vessel is
                    abroad, to the nearest Lloyd’s Agent so that a surveyor may
                    be appointed to represent the Underwriters should they so
                    The Underwriters shall be entitled to decide the port to
                    which the vessel shall proceed for docking or repair (the
                    actual additional expense of the voyage arising from
                    compliance with the Underwriters’ requirements being
                    refunded to the Assured) and shall have a right of veto
                    concerning a place of repair or a repairing The Underwriters
                    may also take tenders or may require further tenders to be
                    taken for the repair of the vessel. Where such a tender has
                    been taken and a tender is accepted with the approval of the
                    Underwriters, an allowance shall be made at the rate of 30%
                    per annum on the insured value for time lost between the
                    despatch of the invitations to tender required by
                    Underwriters and the acceptance of a tender to the extent
                    that such time is lost solely as the result of tenders
                    having been taken and provided that the tender is accepted
                    without delay after receipt o f the Underwriters’ Due credit
                    shall be given against the allowance as above for any
                    amounts recovered in respect of fuel and stores and wages
                    and maintenance of th e Master Officers and Crew or any
                    member thereof, including amounts allowed in general
                    average, and for any amounts recovered from third parties in
                    respect of damages for detention and/or loss of profit
                    and/or running expenses, for the period covered by the
                    tender allowance or any part thereof. Where a part of the
                    cost of the repair of damage other than a fixed deductible
                    is not recoverable from the Underwriters the allowance shall
                    be reduced by a similar proportion. In the event of failure
                    to comply with the conditions of this Clause 10 a deduction
                    of 15% shall be made from the amount of the ascertained
                </PolicyPoint>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default marinehull;
