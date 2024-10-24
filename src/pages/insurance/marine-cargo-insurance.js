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

const marinecargo = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Marine-Cargo Insurance",
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
                 Marine-Cargo
              </h2>

              <div className="policy-points">
                <PolicyPoint>
                  If there is any material misdescription of any of the property
                  hereby insured, the company shall not be liable for any loss
                  or damage resulting therefrom.
                </PolicyPoint>

                <PolicyPoint>
                  Marine Cargo Insurance Meaning Marine insurance is often
                  thought of as coverage for shipping goods by sea. However, it
                  offers more than that. Marine insurance policies also protect
                  goods during transportation by rail, road and air. Marine
                  Cargo Insurance Types <br />
                  Marine Cargo Insurance transit by Steamer or Powered Vessel
                  (INSTITUTE CARGO CLAUSES (A), (B) & (C).
                  <br />
                  Marine Cargo Insurance transit by Rail/Lorry/Truck.
                  <br />
                  Marine Cargo Insurance transit by Inland Rail or Road.
                  <br />
                  Marine Cargo Insurance transit by Inland Cargoes (water
                  borne).
                  <br />
                  Marine Cargo Insurance transit by Air Cargo.
                  <br />
                  More information about Marine Cargo Insurance are as below-
                  <br />
                  INSTITUTE CARGO CLAUSES (A)
                  <br />
                  Risks Covered
                  <br />
                  This insurance covers all risks of loss of or damage to the
                  subject-matter insured except as excluded by the provisions of
                  Clauses 4, 5, 6 and 7 below. General Average
                  <br />
                  This insurance covers general average and salvage charges,
                  adjusted or determined according to the contract of carriage
                  and/or the governing law and practice, incurred to avoid or in
                  connection with the avoidance of loss from any cause except
                  those excluded in Clauses 4, 5, 6 and 7 below. “Both to Blame
                  Collision Clause”
                  <br />
                  This insurance indemnifies the Assured, in respect of any risk
                  insured herein, against liability incurred under any Both to
                  Blame Collision Clause in the contract of carriage. In the
                  event of any claim by carriers under the said Clause, the
                  Assured agree to notify the Insurers who shall have the right,
                  at their own cost and expense, to defend the Assured against
                  such claim. Exclusions
                  <br />
                  In no case shall this insurance cover
                  <br />
                  4.1 loss damage or expense attributable to wilful misconduct
                  of the Assured
                  <br />
                  4.2 ordinary leakage, ordinary loss in weight or volume, or
                  ordinary wear and tear of the subject-matter insured
                  <br />
                  4.3 loss damage or expense caused by insufficiency or
                  unsuitability of packing or preparation of the subjectmatter
                  <br /> insured to withstand the ordinary incidents of the
                  insured transit where such packing or preparation is carried
                  out by the Assured or their employees or prior to the
                  attachment of this insurance (for the purpose of these Clauses
                  “packing” shall be deemed to include stowage in a container
                  and “employees” shall not include independent contractors) 4.4
                  loss damage or expense caused by inherent vice or nature of
                  the subject-matter insured
                  <br />
                  4.5 loss damage or expense caused by delay, even though the
                  delay be caused by a risk insured against <br />
                  (except expenses payable under Clause 2 above) 4.6 loss damage
                  or expense caused by insolvency or financial default of the
                  owners managers charterers <br />
                  or operators of the vessel where, at the time of loading of
                  the subject-matter insured on board the vessel, the Assured
                  are aware, or in the ordinary course of business should be
                  aware, that such insolvency or financial default could prevent
                  the normal prosecution of the voyage This exclusion shall not
                  apply where the contract of insurance has been assigned to the
                  party claiming hereunder who has bought or agreed to buy the
                  subject-matter insured in good faith under a binding contract
                  4.7 loss damage or expense directly or indirectly caused by or
                  arising from the use of any weapon or device <br />
                  employing atomic or nuclear fission and/or fusion or other
                  like reaction or radioactive force or matter. 5.1 In no case
                  shall this insurance cover loss damage or expense arising from
                  <br />
                  5.1.1 unseaworthiness of vessel or craft or unfitness of
                  vessel or craft for the safe carriage of <br />
                  the subject-matter insured, where the Assured are privy to
                  such unseaworthiness or unfitness, at the time the
                  subject-matter insured is loaded therein 5.1.2 unfitness of
                  container or conveyance for the safe carriage of the
                  subject-matter insured,
                  <br /> where loading therein or thereon is carried out prior
                  to attachment of this insurance or by the Assured or their
                  employees and they are privy to such unfitness at the time of
                  loading. 5.2 Exclusion 5.1.1 above shall not apply where the
                  contract of insurance has been assigned to the <br />
                  party claiming hereunder who has bought or agreed to buy the
                  subject-matter insured in good faith under a binding contract.
                  <br />
                  5.3 The Insurers waive any breach of the implied warranties of
                  seaworthiness of the ship a<br />
                  nd fitness of the ship to carry the subject-matter insured to
                  destination. In no case shall this insurance cover loss damage
                  or expense caused by
                  <br />
                  6.1 war civil war revolution rebellion insurrection, or civil
                  strife arising therefrom,
                  <br /> or any hostile act by or against a belligerent power
                  6.2 capture seizure arrest restraint or detainment (piracy
                  excepted), and the consequences <br />
                  thereof or any attempt thereat 6.3 derelict mines torpedoes
                  bombs or other derelict weapons of war.
                  <br />
                  In no case shall this insurance cover loss damage or expense
                  <br />
                  7.1 caused by strikers, locked-out workmen, or persons taking
                  part in labour disturbances, riots or civil commotions
                  <br />
                  7.2 resulting from strikes, lock-outs, labour disturbances,
                  riots or civil commotions
                  <br />
                  7.3 caused by any act of terrorism being an act of any person
                  acting on behalf of, <br />
                  or in connection with, any organisation which carries out
                  activities directed towards the overthrowing or influencing,
                  by force or violence, of any government whether or not legally
                  constituted 7.4 caused by any person acting from a political,
                  ideological or religious motive.
                  <br />
                  Termination of Contract of Carriage
                  <br />
                  If owing to circumstances beyond the control of the Assured
                  either the contract of <br />
                  carriage is terminated at a port or place other than the
                  destination named therein or the transit is otherwise
                  terminated before unloading of the subject-matter insured as
                  provided for in Clause 8 above, then this insurance shall also
                  terminate unless prompt notice is given to the Insurers and
                  continuation of cover is requested when this insurance shall
                  remain in force, subject to an additional premium if required
                  by the Insurers, either 8.1 until the subject-matter insured
                  is sold and delivered at such port or place, or, <br />
                  unless otherwise specially agreed, until the expiry of 60 days
                  after arrival of the subject-matter insured at such port or
                  place, whichever shall first occur, or 8.2 if the
                  subject-matter insured is forwarded within the said period of
                  60 days
                  <br /> (or any agreed extension thereof) to the destination
                  named in the contract of insurance or to any other
                  destination, until terminated in accordance with the
                  provisions of Clause 8 above. Claims
                  <br />
                  Insurable Interest
                  <br />
                  In order to recover under this insurance the Assured must have
                  an insurable interest in the subjectmatter <br />
                  insured at the time of the loss. 9.1 Subject to Clause 09
                  above, the Assured shall be entitled to recover for insured
                  loss occurring during
                  <br /> the period covered by this insurance, notwithstanding
                  that the loss occurred before the contract of insurance was
                  concluded, unless the Assured were aware of the loss and the
                  Insurers were not. Forwarding Charges 10.Where, as a result of
                  the operation of a risk covered by this insurance, <br />
                  the insured transit is terminated at a port or place other
                  than that to which the subject-matter insured is covered under
                  this insurance, the Insurers will reimburse the Assured for
                  any extra charges properly and reasonably incurred in
                  unloading storing and forwarding the subject-matter insured to
                  the destination to which it is insured. This Clause 10, which
                  does not apply to general average or salvage charges, <br />
                  shall be subject to the exclusions contained in Clauses 4, 5,
                  6 and 7 above, and shall not include charges arising from the
                  fault negligence insolvency or financial default of the
                  Assured or their employees. Constructive Total Loss 11.No
                  claim for Constructive Total Loss shall be recoverable
                  hereunder unless
                  <br /> the subject-matter insured is reasonably abandoned
                  either on account of its actual total loss appearing to be
                  unavoidable or because the cost of recovering, reconditioning
                  and forwarding the subject-matter insured to the destination
                  to which it is insured would exceed its value on arrival.
                  Increased Value
                  <br />
                  12.1 If any Increased Value insurance is effected by the
                  Assured on the subject-matter insured under
                  <br /> this insurance the agreed value of the subject-matter
                  insured shall be deemed to be increased to the total amount
                  insured under this insurance and all Increased Value
                  insurances covering the loss, and liability under this
                  insurance shall be in such proportion as the sum insured under
                  this insurance bears to such total amount insured. In the
                  event of claim the Assured shall provide the Insurers with
                  evidence of the amounts insured under all other insurances.
                  12.2 Where this insurance is on Increased Value the following
                  clause shall apply: The agreed value of
                  <br /> the subject-matter insured shall be deemed to be equal
                  to the total amount insured under the primary insurance and
                  all Increased Value insurances covering the loss and effected
                  on the subject-matter insured by the Assured, and liability
                  under this insurance shall be in such proportion as the sum
                  insured under this insurance bears to such total amount
                  insured. In the event of claim the Assured shall provide the
                  Insurers with evidence of the amounts insured under all other
                  insurances. Benefit Of Insurance
                  <br />
                  13.This insurance
                  <br />
                  13.1 covers the Assured which includes the person claiming
                  indemnity either as the person by
                  <br /> or on whose behalf the contract of insurance was
                  effected or as an assignee, 13.2 shall not extend to or
                  otherwise benefit the carrier or other bailee.
                  <br />
                  Minimising Losses
                  <br />
                  <br />
                  Duty of Assured
                  <br />
                  14.It is the duty of the Assured and their employees and
                  agents in respect of loss recoverable hereunder
                  <br />
                  14.1 to take such measures as may be reasonable for the
                  purpose of averting or minimising such loss, and
                  <br />
                  14.2 to ensure that all rights against carriers, bailees or
                  other third parties are properly preserved and <br />
                  <br />
                  exercised and the Insurers will, in addition to any loss
                  recoverable hereunder, reimburse the Assured for any charges
                  properly and reasonably incurred in pursuance of these duties.
                  Waiver
                  <br />
                  <br />
                  15.Measures taken by the Assured or the Insurers with the
                  object of saving, protecting or recovering the subject <br />
                  <br />
                  matter insured shall not be considered as a waiver or
                  acceptance of abandonment or otherwise prejudice the rights of
                  either party. Avoidance Of Delay
                  <br />
                  <br />
                  16.It is a condition of this insurance that the Assured shall
                  act with reasonable despatch in all circumstances within their
                  control.
                  <br />
                  <br />
                  Law And Practice
                  <br />
                  <br />
                  <br />
                  <br />
                  17.This insurance is subject to English law and practice.
                  <br />
                  <br />
                  INSTITUTE CARGO CLAUSES (B)
                  <br />
                  <br />
                  Risks Covered
                  <br />
                  <br />
                  This insurance covers 1.1 loss of or damage to the
                  subject-matter insured reasonably attributable to
                  <br />
                  <br />
                  1.1.1 fire or explosion
                  <br />
                  <br />
                  1.1.2 vessel or craft being stranded grounded sunk or capsized
                  <br />
                  <br />
                  1.1.3 overturning or derailment of land conveyance
                  <br />
                  <br />
                  1.1.4 collision or contact of vessel craft or conveyance with
                  any external object other than water
                  <br />
                  <br />
                  1.1.5 discharge of cargo at a port of distress
                  <br />
                  <br />
                  1.1.6 earthquake volcanic eruption or lightning,
                  <br />
                  <br />
                  1.2 loss of or damage to the subject-matter insured caused by
                  <br />
                  <br />
                  1.2.1 general average sacrifice
                  <br />
                  <br />
                  1.2.2 jettison or washing overboard
                  <br />
                  <br />
                  1.2.3 entry of sea lake or river water into vessel craft hold
                  conveyance container or place of storage,
                  <br />
                  <br />
                  1.3 total loss of any package lost overboard or dropped whilst
                  loading on to, or unloading from, vessel or craft.
                  <br />
                  <br />
                  1.3.1 any partial loss of any package lost overboard or
                  dropped whilst loading on to, or unloading from, vessel or
                  craft.
                  <br />
                  <br />
                  Exclusions
                  <br />
                  <br />
                  As per INSTITUTE CARGO CLAUSE (A) and-
                  <br />
                  <br />
                  deliberate damage to or deliberate destruction of the
                  subject-matter insured or any part thereof by the wrongful
                  <br />
                  <br /> act of any person or persons GENERAL AVERAGE,
                  TERMINATION OF CONTRACT OF CARRIAGE, CLAIMS, BENEFIT OF
                  INSURANCE, DUTY OF ASSURED, WAIVER, AVOIDANCE OF DELAY
                  <br />
                  <br />
                  As per INSTITUTE CARGO CLAUSE (A)
                  <br />
                  <br />
                  INSTITUTE CARGO CLAUSES (C)
                  <br />
                  <br />
                  Risks Covered
                  <br />
                  <br />
                  As per INSTITUTE CARGO CLAUSE (B) except 1.2.3 and 1.3.1
                  <br />
                  <br />
                  Exclusions
                  <br />
                  <br />
                  As per INSTITUTE CARGO CLAUSE (A) and-
                  <br />
                  <br />
                  deliberate damage to or deliberate destruction of the
                  subject-matter insured or
                  <br />
                  <br /> any part thereof by the wrongful act of any person or
                  persons GENERAL AVERAGE, TERMINATION OF CONTRACT OF CARRIAGE,
                  CLAIMS, BENEFIT OF INSURANCE, DUTY OF ASSURED, WAIVER,
                  AVOIDANCE OF DELAY
                  <br />
                  <br />
                  As per INSTITUTE CARGO CLAUSE (A)
                  <br />
                  <br />
                  IMPORT RAIL/LORRY/TRUCK ALL RISKS
                  <br />
                  <br />
                  Risks Covered
                  <br />
                  <br />
                  This insurance covers, all risks of loss or damage to the
                  subject matter insured expect as provided
                  <br /> in clause Nos. except as provided in Clauses 2,3, and 4
                  below. Exclusions In no case shall this insurance cover
                  <br />
                  Loss, damage or expense attributable to wilful misconduct of
                  the Assured
                  <br />
                  Ordinary leakage, ordinary loss in weight or volume, or
                  ordinary wear and tear of the subject matter insured
                  <br />
                  3 Loss, damage or expense caused by insufficiency or
                  unsuitability of packing or preparation of the subject matter
                  insured <br />
                  (for the purpose of this Clause 2.3 “packing” shall be deemed
                  to include stowage in a container or liftvan but only when
                  such stowage is carried out prior to attachment of this
                  insurance or by the Assured or their servants) or when the
                  subject matter is carried in open wagon/lorry/vehicle unless
                  covered by Tarpaulin Loss, damage or expense caused by delay,
                  even though the delay be caused by a risk insured against
                  <br />
                  Loss, damage or expense caused by inherent vice or nature of
                  the subject matter insured.
                  <br />
                  In no case shall this insurance cover loss damage or expense
                  caused by
                  <br />
                  War, Civil war, Revolution, Rebellion, insurrection, or civil
                  strife arising Clause there-from,
                  <br /> or any hostile act by or against a belligerent power
                  capture, seizure, arrest, restraint or detainment, and the
                  consequences thereof or any attempt thereat
                  <br />
                  Derelict mines bombs or other derelict weapons of war.
                  <br />
                  In no case shall this insurance cover loss damage or expense
                  Strike Exclusion
                  <br />
                  paused by strikers, locked-out workmen, or persons taking part
                  in labour Clause disturbances, riots or civil commotions
                  <br />
                  resulting from strikes, lock-outs, labour disturbances, riots
                  or civil commotions
                  <br />
                  Caused by any terrorist or any person acting from a political
                  motive.
                  <br />
                  Duration This insurance attaches with the loading of each bale
                  or package into the Vehicle/Rail
                  <br /> for immediate transit and being continuous in all
                  situation beyond the control of the insured in ordinary course
                  of transit and ceases immediately after until delivery to the
                  final warehouse at the destination named in the policy, or
                  <br />
                  in respect of transits by Rail only until expiry of 30 days
                  from the time of loading of the Cargo on to the Railway Wagon
                  ; or
                  <br />
                  in respect of transits by Road only, until expiry of 30 days
                  from the time of loading of Cargo on to the Vehicle ;<br />
                  whichever shall first occur.
                  <br />
                  <br />
                  Claims
                  <br />
                  1 In order to recover under this insurance the Assured must
                  have an Interest insurable interest
                  <br />
                  in the subject matter insured at the time of loss.
                  <br />
                  6.2 Subject to 6.1 above, the Assured shall be entitled to
                  recover for insured loss occurring during <br />
                  the period covered by this insurance, notwithstanding that the
                  loss occurred before the contract of insurance was concluded
                  unless the Assured were aware of the loss and the underwriters
                  were not. Benefit of Insurance
                  <br />
                  This insurance shall not inure to the benefit of the carrier
                  of other Bailee.
                  <br />
                  AIR RISK Commencement, Duration & Termination of Risk :<br />
                  This insurance attached form the time the subject matter
                  insured is loaded in to the air Craft at the place
                  <br /> named in the policy for the commencement of the transit
                  and continues during the ordinary course of transit and
                  terminates on unloading of the cargo at the final Air port of
                  the destination named in the policy. Or in any other airport
                  which the assured elect to use either for storage or
                  allocation or distribution.
                  <br />
                  Or on the expiry of 30 days form the date of loading whichever
                  shall first occur.
                  <br />
                  This insurance shall remain in force subject to termination as
                  provided for above and to the provisions as given below){" "}
                  <br />
                  during delay beyound the control of the assured any deviation,
                  forced discharge, reshipment or transshipment and during any
                  variation of the adventure is arising form the exercise of a
                  liberty granted to the Air carriers under the contract of
                  carriage. If owing the circumstance beyond the control of the
                  Assured either the contract of carriage is terminated at a
                  place other <br />
                  than the destination named therein or the adventure is other
                  wise terminated before the delivery of the subject matter
                  insured as provided for above then subject to prompt notice
                  being given to underwriters and payment of additional premium
                  this insurance shall remain in force until either. Warranty
                  Warranted free from loss or damage unless caused by Air Crush
                  due to any reason or hijacking, forced landing and collision
                  <br /> with any object in the air, whilst in transit.
                  Warranted that no liability shall attach to the insurer for
                  goods lost or damaged whilst in custody of the carriers unless
                  <br /> a claim provisional or otherwise accompanied with
                  necessary claim documents has been loaded by the insured
                  against the carriers concerned immediately on detection of
                  such loss or damage at the time of delivery. In no case cleans
                  receipt should be given to the carriers for goods delivered in
                  defective / Damage condition. Held covered at a premium to be
                  arranged in case of change of transit or of any omission or
                  error in the description of the
                  <br /> subject matter insured or to the transit. It is the
                  duty of the assured and their agents in all cases to ensure
                  that all rights against carriers. Bailees or other third
                  parties are properly preserved and exercises. It is a
                  condition of this insurance that the assured shall act with
                  reasonable despatch in all circumstances within their control.
                  <br />
                  N.B : If it is necessary to extend the duration of cover, then
                  the insured shall have to apply 10(Ten) days before the expiry{" "}
                  <br />
                  of duration to the Committee through their insurer
                  highlighting the circumstances as to why extension is
                  required. For more information, you are requested to contact
                  to our office.
                  <br />
                </PolicyPoint>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default marinecargo;
