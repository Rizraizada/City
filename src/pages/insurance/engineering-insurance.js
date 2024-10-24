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

const eng = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Engineering Insurance",
      icon: Wrench,
      color: "rose",
    },
  ];

  // Inject styles into the document head using useEffect
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
  }, []); // Empty dependency array means this runs once when the component mounts

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
                Engineering
              </h2>

              <div className="policy-points">
                <PolicyPoint>
                  If there is any material misdescription of any of the property
                  hereby insured, the company shall not be liable for any loss
                  or damage resulting therefrom.
                </PolicyPoint>

                <PolicyPoint>
                  CONTRACTOR ’S ALL RISK POLICY <br />
                  GENERAL EXCLUSIONS
                  <br />
                  The Insurer will not indemnify the insured in respect of loss,
                  damage or liability directly or indirectly caused by or
                  arising out of or aggravated by.
                  <br />
                  War, invasion, act of foreign enemy, hostilities (Whether war
                  be declared or not), civil war, rebellion, <br />
                  revolution, insurrection, mutiny, riot, civil commotion,
                  strike, lock-out, military or usurped power, a group of
                  malicious persons or persons acting on behalf of or in
                  connection with any political organization, conspiracy,
                  confiscation, commandeering, requisition or destruction or
                  damage by order of any government de jure or de facto or by
                  any public authority. Nuclear reaction, nuclear radiation or
                  radioactive contamination.
                  <br />
                  Willful act or Willful negligence of the Insured or of his
                  representatives.
                  <br />
                  Cessation works whether total or partial. In any action, suit
                  or other proceeding where the Insurer allege that by reason of
                  the provisions Exclusion <br />
                  (a) above any loss, destruction, damage or liability is not
                  covered by this insurance the burden of providing that such
                  loss, destruction, damage or liability is covered shall be
                  upon the insured. PERIOD OF COVER
                  <br />
                  The Liability of the Insurer shall commence, notwithstanding
                  any date to the contrary specified in the Schedule,
                  <br /> directly upon commencement of work or after the
                  unloading of the items entered in the Schedule at the site.
                  The Insurers’ liability expires for parts of the insured
                  contract works taken over or put into service. At the latest
                  the insurance shall expire on the date specified in the
                  Schedule. Any Extensions of the period o<br />f insurance are
                  subject to the prior written consent of the Insurer. GENERAL
                  CONDITION
                  <br />
                  The due observance and fulfillment of the terms of this policy
                  in so far as they relate to anything to be done or complied
                  with
                  <br /> by the Insured and the truth of the statements and
                  answers in the questionnaire and proposal made by the insured
                  shall be a condition precedent to any liability of the
                  Insurer. The Schedule and the Section (s) shall be deemed to
                  be incorporated in and form part of this policy and the
                  expression “this policy”
                  <br /> wherever used in this contract shall be read as
                  including the Schedule and the section (s). Any word or
                  expression to which a specific meaning has been attached in
                  any part of this policy or of the Schedule or of the Section
                  (s) shall bear such meaning wherever it may appear. The
                  Insured shall at his own expense take all reasonable
                  precautions and comply with all reasonable recommendations of
                  the Insurer to
                  <br /> prevent loss, damage or liability and comply with
                  statutory requirement and manufacturers recommendations.
                  Representation of the Insurer shall at any reasonable time
                  have the right to inspect and examine the risk and the Insured
                  shall provide <br />
                  the representatives of the Insurer with all details and
                  information necessary for the assessment of the risk. The
                  Insured shall immediately notify the Insurer by telegram and
                  in writing of any material change in the risk and cause at his
                  own expense
                  <br /> such additional precautions to be taken as
                  circumstances may require, and the scope of cover and/or
                  premium shall, if necessary, be adjusted accordingly. No
                  material alternation shall be made or admitted by the Insured
                  whereby the risk is increased, unless the continuance of the
                  insurance be
                  <br /> confirmed in writing by the Insurer. In the event of
                  any occurrence which might give rise to a claim under this
                  policy, the insured shall
                  <br />
                  Immediately notify the Insurer by telephone or telegram as
                  well as in writing, giving and indication as to the nature and
                  extent of loss or damage ;<br />
                  take all steps within his power to minimize the extent of the
                  loss or damage ;<br />
                  Preserve the parts affected and make them available for
                  inspection by a representative or surveyor of the Insurer;
                  <br />
                  furnish all such information and documentary evidence as the
                  Insurer may require;
                  <br />
                  inform the police authorities in case of loss or damage due to
                  theft or burglary.
                  <br />
                  The Insurer shall not in any case be liable for loss, damage
                  or liability of which no notice has been received by the
                  insurer within 14 days of its occurrence.
                  <br />
                  The repairs or replacement of any minor damage; in all other
                  cases a representative of the Insurer shall have the
                  opportunity
                  <br /> of inspection the loss or damage before any repairs or
                  alternation are effected if a representative of the Insurer
                  does not carry out the inspection within a period of time
                  which could be considered as adequate under the circumstances
                  the Insured is entitled proceed with the repairs or
                  replacement. The liability of the Insurer under this policy in
                  respect of any item sustaining damage shall cease if said item
                  is not repaired properly without delay.
                  <br />
                  The Insured shall at the expense of the Insure do and concur
                  in doing and permit to be done all such acts and things as may
                  be necessary
                  <br /> or require by the Insurer in the interest of any right
                  or remedies, or of obtaining relief or indemnity form parties
                  ( other than those insured under this policy) to which the
                  Insurer shall be or would become entitled or subrogated upon
                  their paying for or making good any loss or damage under this
                  policy, whether such acts and things shall be or become
                  necessary or required before or after the Insured’s
                  indemnification by the Insurer. If any difference shall arise
                  as to the amount to be paid under this policy ( liability
                  being otherwise admitted) such difference shall be r<br />
                  eferred to the decision of an Arbitrator to be appointed in
                  writing by the parties in difference or if they cannot agree
                  upon a single Arbitrator to the decision of two Arbitrators,
                  one to be appointed in writing by each of the parties, or, in
                  case the Arbitrators do not agree, of an umpire to be
                  appointed in writing by the Arbitrators before entering the
                  reference. The umpire shall sit with the Arbitrators and
                  preside at their meetings. The making of and award shall be a
                  condition precedent to an right of action against the Insurer.
                  If a claim is in any respect fraudulent, or if any false
                  declaration is made or used in support thereof, or if
                  fraudulent means or devices
                  <br /> are used the Insured or anyone; acting on his behalf to
                  obtain any benefit under this policy, or if a claim is made
                  and rejected and no action or suit is commenced within three
                  month after such rejection or, in case of adoration taking
                  place as provided herein, within three months after the
                  Arbitrator or Arbitrators or umpire have made their award, all
                  benefit under this policy shall be forfeited. If at the time
                  any claim arises under the policy there be any other Insurance
                  covering the same loss, damage or liability the Insurer shall
                  <br /> not be liable to pay or contribute more than their
                  ratable proportion of any claim for such, damage or liability.
                  SECTION I – Material Damage
                  <br />
                  Hereby agree with the Insured that if at any time during the
                  period of cover the items or part thereof entered in the
                  schedule shall <br />
                  suffer any unforeseen and sudden physical loss or damage from
                  any cause, other than those specially excluded, in a manner
                  necessitating repair or replacement the Insurer will indemnity
                  the Insured in respect of such loss or damage as hereinafter
                  provided by payment in case, replacement or repair (at their
                  own option) up to an amount not exceding in respect of each of
                  the items specified in the schedule the sum set opposite
                  thereto and not exceeding in any one event the limite of
                  indemnity where applicable and not exceeding in all the total
                  sum expressed in the schedule as insured hereby. The Insurer
                  will also reimburse the Insured for the cost of clearance of
                  debris following upon any event giving rise to a claim under
                  <br /> this policy provided a separate sum therefore has been
                  entered in the schedule. Special Exclusion to section I<br />
                  The Insurer shall not, however, be liable for
                  <br />
                  The deductible stated in the Schedule to be borne by the
                  insured in any occurrence;
                  <br />
                  Consequential loss of any kind or description whatsoever
                  including penalties, losses due to delay, lack of performance,
                  loss of contract;
                  <br />
                  Loss or damage due to faulty design. the cost of replacement,
                  repair or rectification, defective material and/or
                  workmanship, <br />
                  but this exclusion shall be limited to the items immediately
                  affected and shall not be deemed to exclude loss of or damage
                  to correctly executed times resulting from an accident due to
                  such defective materials and/or workmanship. Wear and tear,
                  corrosion, oxidation, deterioration due to lack of use normal
                  atmospheric conditions;
                  <br />
                  Loss of or damage to construction plant equipment and
                  construction machinery due to electrical or mechanical
                  breakdown, <br />
                  failure, breakage or derangement, freezing or coolant or other
                  fluid, defective lubrication or lack of oil or coolant, but if
                  as a consequence of such breakdown or derangement and accident
                  occurs causing external damage, such consequential damage
                  shall be identifiable; Loss of or damage to vehicles licensed
                  for general road use or water borne vessels or air craft;
                  <br />
                  Loss of or damage to files, drawing, accounts, bills,
                  currency, stamps, deeds, evidences of debt, notes, securities,
                  cheques;
                  <br />
                  Loss discovered only at the time of taking an inventory;
                  <br />
                  Section II – Third party Liability
                  <br />
                  The Insurer will indemnify the Insured up to but not exceeding
                  the amounts specified <br />
                  in the schedule against such sums which the insured shall
                  become legally liable to pay as damages consequent upon.
                  Accidental bodily injury to or illness of third parties
                  (whether fatal or not)
                  <br />
                  Accidental loss of or damage to property belonging to third
                  parties.
                  <br />
                  Occurring in direct connection with the construction or
                  erection testing of the items
                  <br /> insured under section I and happening on or in the
                  immediate vicinity of the site during the period of cover. In
                  respect of a claim for compensation to which the indemnity
                  provided herein applies, <br />
                  the insurer will in addition indemnify the Insured against;
                  all costs and expenses of litigation recovered by any climate
                  form the Insured, and
                  <br />
                  all costs and expenses incurred with the written consent of
                  the Insurer,
                  <br />
                  Provided always that the liability of the Insurers under this
                  section shall not exceed the limits of indemnity stated in the
                  Schedule.
                  <br />
                  Special Exclusion to Section II
                  <br />
                  The Insurer will not indemnify the Insured in respect of
                  <br />
                  the deductible started in the Schedule to be borne by the
                  Insured in any one occurrence;
                  <br />
                  the expenditure incurred in doing or redoing or making good or
                  repairing or replacing anything covered or coverable under
                  section <br />1 of this policy; damage to any property or land
                  or building caused by vibration or by the removal or weakening
                  of support <br />
                  to injury or damage to any person or property occasioned by or
                  resulting from any such damage (unless especially agreed upon
                  by endorsement); Liability consequent upon bodily injury to or
                  illness of employees or working or workmen of the
                  contractors(s) or the principal(s)
                  <br /> or any other firm connected with the project which or
                  part of which is insured under Section I, or members of their
                  families; loss of or damage to property belonging to or held
                  in care, custody or control of the contractor(s), <br />
                  the principal(s) or any other firm connected with the project
                  which or part of which is insured under Section I, or an
                  employee or workman of one of the aforesaid; any accident
                  caused by vehicles Licensed for general road use or by
                  waterborne vessels or aircraft;
                  <br />
                  any agreement by the Insured to pay any sum by way of
                  indemnity or otherwise unless such liability <br />
                  would have attached also in the absence of such agreement.
                </PolicyPoint>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default eng;
