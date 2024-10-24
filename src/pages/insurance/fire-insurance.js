import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Shield, AlertCircle } from "lucide-react";
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

const Firensurance = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Fire Policy",
      icon: Flame,
      color: "rose",
    },
    {
      id: "tab2",
      title: "Industrial All Risks (IAR) Insurance Policy",
      icon: Shield,
      color: "blue",
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

    // Cleanup function to remove the styles when component unmounts
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
                <Flame className="content-icon text-rose-500" />
                Fire Policy Coverage
              </h2>

              <div className="policy-points">
                <PolicyPoint>
                  If there is any material misdescription of any of the property
                  hereby insured, the company shall not be liable for any loss
                  or damage resulting therefrom.
                </PolicyPoint>

                <PolicyPoint>
                  If there by any material misdescription of any of the property
                  hereby insured, <br />
                  or of any building or place in which such property is
                  contained or any misrepresentation as to any fact, <br />
                  material to be known for estimating the risk or any omission
                  to state such fact, the Corporation/Company shall not be
                  liable upon this policy so far as it relates to property
                  affected by any such misdescription, misrepresentation or
                  omission. No payment in respect of any premium shall be deemed
                  to be payment to the insurer unless a printed form of
                  <br /> receipt for the same signed by an Official or duly
                  authorized person of the insurer shall have been given to the
                  insured. The insured shall give notice to the
                  Corporation/Company of any insurance or insurances already
                  effected, or which may subsequently be effected, covering any
                  of the property hereby insured, and unless such notice be
                  given and the particulars of such insurance or insurances be
                  stated in or endorsed on this policy by or on behalf of the
                  Corporation/Company before the occurrence of any loss or
                  damage, all benefit under this policy shall be forfeited. All
                  insurance under this Policy
                  <br />
                  (1) on any building or part of any building,
                  <br />
                  (2) on any property contained in any building,
                  <br />
                  3) on rent or other subject matter of insurance in respect of
                  or in connection with any building or any property contained
                  in any building, [shall cease immediately upon any fall or
                  displacement]
                  <br />
                  (a) of such building or of any part thereof,
                  <br />
                  (b) of the whole or any part of any range of buildings or of
                  any structure of which such building forms part.
                  <br />
                  PROVIDED that such fall or’ displacement is of the whole or a
                  substantial or important part of such building or impairs the
                  usefulness of such building or any part thereof or leaves such
                  building or any part thereof or any property c<br />
                  ontained therein subject to increased risk of fire or is
                  otherwise material. AND PROVIDED that such fall or
                  displacement is not caused by fire, loss or damage by which is
                  covered by this policy or would be covered if such building,
                  range of buildings or structure were insured under this
                  policy.
                  <br />
                  In any action, suit or other proceeding, the burden of proving
                  that any fall or displacement is caused by fire as aforesaid
                  shall be upon the Insured. (i) This insurance does not cover
                  :-
                  <br />
                  (a) Loss by theft during or after the occurrence of a fire.
                  <br />
                  (b) Loss or damage to property occasioned by its own
                  fermentation, natural heating or spontaneous combustion
                  (except as may be provided in accordance with Condition 7 ‘f’)
                  or by its undergoing any heating or drying process.
                  <br />
                  (c) Loss or damage occasioned by or through or in consequence
                  of
                  <br />
                  (1) The burning of property by order of any public authority
                  <br />
                  (2) Subterranean Fire
                  <br />
                  (d) Loss or damage directly or indirectly caused by or arising
                  from or in consequence of or contributed to by nuclear weapons
                  material.
                  <br />
                  (ii) This insurance does not cover loss or damage directly or
                  indirectly caused by or arising from or in consequence of or
                  contributed to by ionizing radiations or contamination by
                  radioactivity from any nuclear fuel or from any nuclear waste
                  from the combustion of nuclear fuel. For the purposes of the
                  Condition 5 (ii) only combustion shall include any
                  self-sustaining process of nuclear fission.
                  <br />
                  This insurance does not cover any loss or damage occasioned by
                  or through or in consequence, directly or indirectly, of any
                  of the following occurrences, namely:-
                  <br />
                  (a) Earthquake, volcanic eruption or other convulsion of
                  nature.
                  <br />
                  (b) Typhoon, hurricane, tornado, cyclone or other atmospheric
                  disturbance.
                  <br />
                  (c) War, invasion, act of foreign enemy, hostilities or
                  warlike operations (whether war be declared or not), civil
                  war.
                  <br />
                  (d) Mutiny, riot, military or popular rising, insurrection,
                  rebellion, revolution, military or usurped powers, martial law
                  or state of siege or any of the events or causes which
                  determine the proclamation or maintenance of martial law or
                  state of siege.
                  <br />
                  Any loss or damage happening during the existence of abnormal
                  conditions (whether physical or otherwise) which are
                  occasioned by or through or in consequence, directly or
                  indirectly, of any of the said occurrences shall be deemed to
                  be loss or damage which is not covered by this insurance,
                  except to the extent that the insured shall prove that such
                  loss or damage happened independently of the existence of such
                  abnormal conditions.
                  <br />
                  In any action, suit or other proceeding, where the
                  Corporation/ Company alleges that by reason of the provisions
                  of this condition any loss or damage is not covered by this
                  insurance, the burden of proving that such loss or damage is
                  covered shall be upon the insured.
                  <br />
                  Unless otherwise expressly stated in the Policy this insurance
                  does not cover: –<br />
                  (a) Goods held in trust or on commission.
                  <br />
                  (b) Bullion or unset precious stones.
                  <br />
                  (c) Any curiosity or work of art for an amount exceeding
                  Tk.2500/-
                  <br />
                  (d) Manuscript, plans, drawings or designs, patterns, models
                  or moulds.
                  <br />
                  (e) Securities, obligations or documents of any kind, stamps,
                  coined or paper money, cheques, books of account or other
                  business books and/or Computer records.
                  <br />
                  (f) Coal, against loss or damage occasioned by its own
                  spontaneous combustion.
                  <br />
                  (g) Explosives.
                  <br />
                  (h) Any loss or damage occasioned by or through or in
                  consequence of explosion; but loss or damage by explosion of
                  gas used for illuminating or domestic purposes in a building
                  in which gas is not generated and which does not form part of
                  any gas works, will be deemed to be loss by fire within the
                  meaning of this policy.
                  <br />
                  (i) Any loss or damage occasioned by or through or in
                  consequence of the burning, whether accidental or otherwise,
                  of forests, bush, prairie, pampas or jungle and the clearing
                  of lands by fire.
                  <br />
                  Under any of the following circumstances the insurance ceases
                  to attach as regards the property affected unless the Insured
                  before the occurrence of any loss or damage, <br />
                  obtains the sanction of the Corporation/ company signified by
                  endorsement upon the policy by or on behalf of the
                  Corporation/Company : (a) If the trade or manufacture carried
                  on be altered or if the nature of the occupation of or other
                  circumstances affecting the building insured or containing the
                  insured property be changed in such a way as to increase the
                  risk of loss or damage by fire.
                  <br />
                  (b) If the buildings insured or containing the insured
                  property become unoccupied and so remain for a period of more
                  than 30 days.
                  <br />
                  (c) If property insured be removed to any building or place
                  other than that in which it is herein stated to be insured.
                  <br />
                  (d) If the interest in the property insured pass from the
                  insured otherwise than by will or operation of law.
                  <br />
                  This insurance does not cover any loss or damage to property
                  which, at the time of the happening of such loss or damage, is
                  insured by or would, but for the existence of this policy,
                  <br /> be insured by any Marine policy or polices except in
                  respect of any excess beyond the amount which would have been
                  payable under the Marine policy or policies had this insurance
                  not been effected. This insurance may be terminated at any
                  time at the request of the insured, in which case the
                  Corporation/Company will retain the customary short period
                  rate for the time the policy has been in force.
                  <br /> This insurance may also at any time be terminated at
                  the option of the Corporation/Company on notice to that effect
                  being given to the insured, in which case the Insurer shall be
                  liable to repay on demand a rateable proportion of the premium
                  for the unexpired term from the date of the cancelment. On the
                  happening of any loss or damage the insured shall forthwith
                  give notice thereof to the Corporation/Company immediately
                  after the loss or damage, or such further time as the
                  Corporation/Company may in writing allow in that behalf,{" "}
                  <br />
                  deliver to the Corporation/Company. (a) a claim in writing for
                  the loss and damage containing as particular an account as may
                  be reasonably practicable of all the several articles or items
                  of property damaged or destroyed, and of the amount of the
                  loss or damage thereto respectively, having regard to their
                  value at the time of the loss or damage, not including profit
                  of any kind.
                  <br />
                  (b) particulars of all other insurances, if any. The insured
                  shall also at all times at his own expense produce, procure
                  and give to the Corporation/ Company all such further
                  particulars, plans, specifications, books, vouchers, invoices
                  duplicates or copies thereof,
                  <br /> documents, proofs and information with respect to the
                  claim and the origin and cause of the fire and the
                  circumstances under which the loss or damage occurred and any
                  matter touching the liability or the amount of the liability
                  of the Corporation/Company as may be reasonably required by or
                  on behalf of the Corporation/Company together with a
                  declaration on oath or in other legal form of the truth of the
                  claim and of any matters connected therewith. No claim under
                  this policy shall be payable unless the terms of this
                  condition have been complied with.
                  <br />
                  On the happening of any loss or damage to any of the property
                  insured by this policy, the Corporation/ Company may (a) enter
                  and take and keep possession of the building or premises where
                  the loss or damage has happened.
                  <br />
                  (b) take possession of or require to be delivered to it any
                  property of the Insured in the building or on the premises at
                  the time of the loss or damage.
                  <br />
                  (c) keep possession of any such property and examine, sort,
                  arrange, remove or otherwise deal with the same.
                  <br />
                  (d) sell any such property or dispose of the same for account
                  of whom it may concern. The powers conferred by this Condition
                  shall be exerciseable by the insurer at any time until notice
                  in writing is given by the Insured that he makes no claim
                  under the policy or, <br />
                  if any claim is made, until such claim is finally determined
                  or withdrawn, and the insurer shall not by any act done in the
                  exercise or purported exercise of its powers hereunder, incur
                  any liability to the insured or diminish its right to rely
                  upon any of the conditions of this policy in answer to any
                  claim. If the Insured or any person on his behalf shall not
                  comply with the requirements of the insurer or shall hinder or
                  obstruct the insurer in the exercise of its powers hereunder,{" "}
                  <br />
                  all benefit under this policy shall be forfeited. The Insured
                  shall not in any case be entitled to abandon any property to
                  the Corporation/Company whether taken possession of by the
                  Corporation/Company or not If the claim be in any respect
                  fraudulent, or if any false declaration be made or used in
                  support thereof, or if any fraudulent means or devices are
                  used by the Insured or any one acting on his behalf to obtain
                  any benefit under this policy; or, if the loss or damage be
                  occasioned by the wilful act, or with the connivance of the
                  insured; or if the claim be made and rejected and an action or
                  suit be not commenced within three months after such
                  rejection. or (in case of an arbitration taking place in
                  pursuance of the 18th condition of this policy) within three
                  months after the arbitrator or arbitrators or umpire shall
                  have made their award, all benefit under this policy shall be
                  forfeited. The Corporation/Company may at its option reinstate
                  or replace the property damaged or destroyed or any part
                  thereof, instead of paying the amount of the loss or damage,
                  <br /> or may join with any other Insurers in so doing, but
                  the Corporation/ Company shall not be bound to reinstate
                  exactly or completely but only as circumstances permit and in
                  reasonably sufficient manner, and in no case shall the
                  Corporation/Company be bound to expend more in reinstatement
                  than it would have cost to reinstate such property as it was
                  at the time of the occurrence of such loss or damage, nor more
                  than the sum insured by the Corporation/Company thereon. If
                  the Corporation/Company so elect to reinstate or replace any
                  property the insured shall, at his own expense, furnish the
                  Corporation/Company with such plans, specifications,
                  measurements, quantities, and such other particulars as the
                  Corporation/ Company may require, and no acts done, or caused
                  to be done by the Corporation/ Company with a view to
                  reinstatement or replacement shall be deemed an election by
                  the Corporation/Company to reinstate or replace. If in any
                  case the Corporation/Company shall be unable to reinstate or
                  repair the property hereby insured, because of any municipal
                  or <br />
                  other regulations in force affecting the alignment of streets,
                  or the construction of buildings, or otherwise, the
                  Corporation/Company shall, in every such case, only be liable
                  to pay such sum as would be requisite to reinstate or repair
                  such property if the same could lawfully be reinstated to its
                  former condition. The insured shall, at the expense of the
                  Corporation/Company, do, and concur in doing and permit to be
                  done, all such, acts and things as <br />
                  may be necessary or reasonable required by the
                  Corporation/Company for the purpose of enforcing any rights
                  and remedies, or of obtaining relief or indemnity from other
                  parties to which the Corporation /Company shall be or would
                  become entited or subrogated, upon its paying for making good
                  any loss or damage under this policy, whether such acts and
                  things shall be or become necessary or required before or
                  after his indemnification by the Corporation/ Company. If at
                  the time of any loss or damage happening to any property
                  hereby insured, there be any other subsisting insurance or
                  insurances, whether effected by the insured or by any other
                  person or persons, covering the same property, this
                  Corporation/Company shall not be liable to pay or contribute
                  more than its rateable proportion of such loss or damage. If
                  the property hereby insured shall, at the breaking out of any
                  fire, be collectively of greater value than the sum insured
                  thereon, then the
                  <br /> insured shall be considered as being his own insurer
                  for the difference, and shall bear a rateable proportion of
                  the loss accordingly. Every item, if more than one, of the
                  policy shall be separately subject to this condition. If any
                  difference arises as to the amount of any loss or damage such
                  difference shall independently of all other questions be
                  referred to the decision o<br />f an arbitrator, to be
                  appointed in writing by the parties in difference, or if they
                  cannot agree upon a single arbitrator, to the decision of two
                  disinterested persons as arbitrators, of whom one shall be
                  appointed in writing by each of the parties within two
                  calendar months after having been required so to do in writing
                  by the other party. In case either party shall refuse or fail
                  to appoint an arbitrator within two calendar months after
                  receipt of notice in writing requiring an appointment, the
                  other party shall be at liberty to appoint a sole arbitrator;
                  and in case of disagreement between the arbitrators the
                  difference shall be referred to the decision of an umpire who
                  shall have been appointed by them in writing before entering
                  on the reference and who shall sit with the arbitrators and
                  preside at their meeting. The death of any party shall not
                  revoke or affect the authority or powers of the arbitrator,
                  arbitrators or umpire respectively; and in the event of the
                  death of an arbitrator or umpire, another shall in each case
                  be appointed in his stead by the party or arbitrators (as the
                  case may be) by whom the arbitrator or umpire so dying was
                  appointed. The costs of the reference and of the award shall
                  be in the discretion of the arbitrator, arbitrators or umpire
                  making the award. And it is hereby expressly stipulated and
                  declared that it shall be a condition precedent to any right
                  of action or suit upon his policy that the award by such
                  arbitrator, arbitrators or umpire of the amount of the loss or
                  damage if disputed shall be first obtained. In no case
                  whatever shall the Corporation/Company be liable for any loss
                  or damage after the expiration of twelve months from the
                  happening of the loss or damage <br />
                  unless the claim is the subject of pending action or
                  arbitration. Every notice and other communication to the
                  Corporation/ Companies required by these Conditions must be
                  written or printed.
                  <br />
                  Loss or damage to plinths and/or foundation and/or pavements
                  is excluded from this insurance.
                  <br />
                  When so authorized by the Corporation/ Companies the officers
                  of the Corporation/ Companies shall have an access at any time
                  to the Risks and/or the Premises.{" "}
                </PolicyPoint>
              </div>
            </motion.div>
          </TabContent>

          <TabContent isActive={activeTab === "tab2"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="content-title">
                <Shield className="content-icon text-blue-500" />
                Industrial All Risks (IAR) Insurance Policy
              </h2>

              <div className="policy-points">
                <h3 className="exclusion-title">
                  Exclusions & Excluded Causes
                </h3>

                <PolicyPoint>
                  This policy does not cover damage to the property insured
                  caused by specific excluded events as detailed in the policy
                  document.
                </PolicyPoint>

                <PolicyPoint>
                  (i) faulty or defective design materials or work man ship
                  inherent vice latent defect gradual deterioration deformation
                  or distortion or wear and tear
                  <br />
                  (ii) Interruption of the water supply gas electricity or fuel
                  systems or failure or the effluent disposal systems to and
                  from the premises unless damage
                  <br /> by a cause not excluded in the policy ensues and then
                  the insurer shall be liable only for such ensuing damage.
                  <br />
                  (i) Collapse or cracking of building
                  <br />
                  (ii ( corrosion rust extremes or changes in temperature
                  dampness dryness wet
                  <br />
                  or dry rot fungus shrinkage evaporation loss of weight
                  pollution contamination change in colour flavour texture or
                  finish action of light vermin
                  <br />
                  insects marring or scratching unless such loss is caused
                  directly by damage
                  <br />
                  to the property insured or to premises containing such
                  property by a cause
                  <br />
                  not excluded in the policy.
                  <br />
                  (c )(i) theft except from a building and then only if there is
                  violent or forcible entry to or exit such building.
                  <br />
                  acts of fraud or dishonesty.
                  <br />
                  disappearance unexplained or inventory shortage misfiling or
                  misplacing of information shortage in supply or delivery of
                  materials or shortage
                  <br /> due to clerical or accounting error. Explosion,
                  cracking, fracturing, collapse or overheating of boilers
                  <br />
                  economises vessels tubes or pipes nipple leakage or the
                  failure of welds of boilers.
                  <br />
                  mechanical or electrical breakdown or derangement of machinery
                  or equipment.
                  <br />
                  (vi) bursting, overflowing, discharging or leaking of water
                  tans apparatus or pipes when the premises are empty or
                  disused.
                  <br />
                  Unless (i) damage by a cause not excluded in the policy ensues
                  and then the insurer shall be liable for such ensuing damage
                  <br />
                  (ii) such loss is caused directly by damage to the property
                  insured or to premises containing such property by a caused
                  not excluded in the
                  <br />
                  policy (d) (i) coastal or river erosion subsidence ground
                  heave or landslip normal settlement or bedding down of
                  structure
                  <br />
                  wind rain hail frost snow flood sand or dust to movable
                  property in the open or in the open sided buildings or to
                  fences and gates the freezing solidification or inadvertent
                  escape of molten material Damage caused by or arising from:
                  <br />
                  (a) any wilful act or wilful negligence on the part the
                  insured or any person acting on his behalf
                  <br />
                  (b) cessation of work delay or loss of market or any other
                  consequential
                  <br />
                  or indirect loss of any kind or description whatsoever
                  <br />
                  Damage occasioned directly or indirectly by or through or in
                  consequence of any of the following occurrence, namely
                  <br />
                  war invasion act of foreign enemy hostilities or warlike
                  operations (whether war be declared or not) civil war
                  <br />
                  mutiny civil commotion assuming the proportions of or
                  amounting to a popular rising military rising insurrection
                  rebellion revolution to military or usurped power
                  <br />
                  Acts of terrorism committed by person or persons acting on
                  behalf of or in connection with any organization. This
                  Exclusion A3 (c) shall not apply to damage by fire
                  <br />
                  For the purpose of this Exclusion A3 (c) “terrorism” means the
                  use of violence for political for ends and includes the use of
                  violence for the purpose of putting the public or any section
                  of the public in fear
                  <br />
                  (i) permanent or temporary dispossession resulting from
                  confiscation nationalization commandeering or requisition by
                  any lawfully constituted authority.
                  <br />
                  (ii) Permanent or temporary dispossession of any building
                  resulting from the unlawful occupation of such building by any
                  person
                  <br />
                  Provided that the insurers are not relived of any liability to
                  the insured in respect of damage to the property insured{" "}
                  <br />
                  occurring before dispossession or during temporary
                  dispossession which is otherwise insured by this policy the
                  destruction of property by order of any public authority. In
                  any action, suit or other proceeding where the insurer alleges
                  that by reason of the provisions of Exclusion A3(a) (b) and
                  (c)
                  <br /> above any loss destruction of damage is not covered by
                  this insurance the burden of proving that such loss
                  destruction or damage is covered shall be upon the insured.
                  Damage directly or indirectly caused by or arising or in
                  consequence of or contributed to by:
                  <br />
                  (a) Nuclear weapons material
                  <br />
                  (b) ionising radiations or contamination by radioactivity from
                  any nuclear fuel
                  <br />
                  or from any nuclear from the combustion of nuclear waste from
                  the
                  <br />
                  combustion of nuclear fuel. Solely for the purpose of this
                  Exclusion A4(b)
                  <br />
                  combustion shall include any self-sustaining process of
                  nuclear fission.
                  <br />
                  EXCLUDED PROPERTY This Policy does not cover (a) money,
                  cheques, stamps, bonds, credit cards, securities of any
                  description <br />
                  jewellery, precious stones, precious metals, bullion furs,
                  curiosities, rare books or works of art unless specifically
                  mentioned as insured by this policy and then only in respect
                  of the perils specified below:- (b) Fixed glass
                  <br />
                  (c) Glass (other than fixed glass) china earthenware marble or
                  other fragile or brittle objects.
                  <br />
                  (d) Electronic installations computers and data processing
                  equipment.
                  <br />
                  but this shall not exclude damage (not otherwise excluded)
                  caused by fire, lightning, explosion, aircraft, riot,
                  strikers, locked-out works
                  <br /> persons taking part in labour disturbances, malicious
                  persons impact by any road vehicle or animals earthquake
                  windstorm flood bursting overflowing discharging or leaking of
                  water tanks apparatus or pipes. Unless specifically mentioned
                  as insured by this policy goods held in trust or on commission
                  documents manuscripts business books computer systems <br />
                  records patterns models moulds plans designs explosives (a)
                  Vehicles licensed for road use (including accessories thereon)
                  caravans trailers railway locomotives or rolling stock
                  watercraft aircraft spacecraft or the like.
                  <br />
                  (b) Property in transit other than within the premises
                  specified in the schedule.
                  <br />
                  (c) Property or structures in course of demolition
                  construction or erection and
                  <br />
                  <br />
                  materials or supplies in connection therewith (d) Land
                  (including top-soil back-fill drainage or culverts) driveways
                  pavements roads runways railway lines dams
                  <br /> reservoirs canals rigs wells pipelines tunnels bridge
                  docks piers jetties excavations wharves mining property
                  underground off-shore property (e) Livestock growing crops or
                  trees (f) Property damaged as a result of its undergoing any
                  process
                  <br />
                  (g) Machinery during installation removal or resiting
                  (including dismantling and re-erection) if directly
                  attributable to such operations
                  <br />
                  (h) Property undergoing alteration repair testing installation
                  or servicing including materials and <br />
                  supplies therefore if directly attributable to the operations
                  of work being performed thereon unless damage by a cause not
                  otherwise excluded ensues and then the insurer will be liable
                  for such ensuing loss. (i) Property more specifically insured
                  <br />
                  <br />
                  Damage to property which at the time of the happening of such
                  damage is insured by or would but for the
                  <br /> existence of this policy be insured by any marine
                  policy or policies except in respect of any excess beyond the
                  amount which would have been payable under the marine policy
                  or policies had this insurance not been effected. Damage to
                  machinery boiler economisers turbines or other vessels
                  machinery or apparatus in which pressure is used or their
                  contents resulting from their explosion or rupture. UNDER
                  INSURANCE If the sum insured under this policy be found to be
                  less than 85% of the value of the property at the time
                  <br /> of loss, then the Insured shall be considered as being
                  his own insurer for the entire difference, and shall bear a
                  rateable proportion of the loss accordingly. Every item, if
                  more than one, of the policy shall be separately subject to
                  this condition. DEDUCTIBLES This policy does not cover the
                  amounts of the deductibles stated in the schedule in respect
                  of each and every <br />
                  loss as ascertained after the application of all other terms
                  and conditions of the policy including any condition of
                  average. Warranted that during the currency of the policy the
                  Insured shall not effect insurance in respect of the amounts
                  of the deductibles stated in the schedule. GENERALCONDITIONS
                  <br />
                  <br />
                  IDENTIFICATION This policy and the schedule (which forms an
                  integral part of this policy) shall be read together as one{" "}
                  <br />
                  <br />
                  contract and words and expressions to which specific meanings
                  have been attached in any part of this policy of the schedule
                  shall bear such specific meanings wherever they shall appear.
                  <br />
                  <br />
                  MISDESCRIPTION If there be any material misdescription by the
                  Insured or any one acting on his behalf of any of the property
                  hereby insured,
                  <br />
                  <br /> or of any building or place in which such property in
                  contained, or of the business or premises to which this
                  insurance refers or any misrepresentation as to any fact
                  material to be known for estimating the risk or any omission
                  to state such fact, the Insurer shall not be liable under this
                  policy for the property affected by any such miss description,
                  misrepresentation or omission. CANCELLATION This insurance may
                  be terminated at any time at the request of the Insured,{" "}
                  <br />
                  <br />
                  in which case the Insurer will retain the customary short
                  period rate for the time the Policy has been in force. This
                  insurance may also be terminated at the option of the insurer
                  on notice to that effect being given to the insured, in which
                  case the insurer shall be liable to repay on demand a ratable
                  proportion of the premium for the unexpired term from the date
                  of the cancellation. FORFEITURE: All benefit under this Policy
                  shall forfeited
                  <br />
                  <br />
                  (a)If any claim made under this policy be in any respect
                  fraudulent or if any false declaration be made or used in
                  support there of, or if any fraudulent means or devices are
                  used by the insured or any one acting on his behalf to obtain
                  any benefit under this Policy or (b) if any claim be made and
                  rejected and an action or suit be not commenced within three
                  months after such rejection, or (in the case of an arbitration
                  taking place in pursuance of Condition No. 7 of this policy)
                  within three months after the arbitrator or arbitrators or
                  umpire shall have made their award. SUBROGATION Any claimant
                  under this policy shall, at the expense of the Insurer do, and
                  concur in doing and permit to be done all such acts and things
                  as may be necessary or reasonably required by the insure for
                  the purpose of enforcing any rights and remedies, or of
                  obtaining relief or indemnity from other parties to which the
                  insurer shall be or would become entitled or subrogated, upon
                  its paying for or making good any loss or damage under this
                  policy, whether such acts and things shall be or become
                  necessary or required before or after his indemnification by
                  the Insurer. CONTRIBUTION If at the time of any lone or damage
                  happening to any property hereby insured, there be any other
                  subsisting insurance or insurances whether effected by the
                  Insured or by any other person or persons covering either such
                  loss or any part of it or the same property the insurer shall
                  not be liable to pay or contribute more than its ra0teable
                  proportion of such loss or damage. 7.ARBITRATION If any
                  difference shall arise as to the amount to be paid under this
                  Policy such difference shall independently of
                  <br /> all other questions be referred to the decision of an
                  arbitrator, to be appointed in writing by the parties in
                  difference or if they Cannot agree upon a single arbitrator,
                  to the decision of two disinterested persons as arbitrators,
                  of whom one shall be appointed in writing by each of the
                  parties within two calendar months after having been required
                  to do so in writing by the other party. In case either party
                  shall refuse or fail to appoint an arbitrator within two
                  calendar months after receipt of notice in writing requiring
                  an appointment, the other party shall be at liberty to appoint
                  a sole arbitrator and in case of disagreement between the
                  arbitrators the decision shall be referred to the decision of
                  an umpire who shall have been appointed by them in writing
                  before entering on the reference and who shall sit with the
                  arbitrators and preside at their meetings. The death of any
                  party shall not revoke or affect the authority or powers of
                  the arbitrators, arbitrators or umpire respectively; and in
                  the event of the death of an arbitrator or umpire, another
                  shall in each case be appointed in his stead by the party or
                  arbitrators (as the case may be) by whom the arbitrator or
                  umpire so dying was appointed. The costs of the reference and
                  of the award shall be in the discretion of the arbitrator,
                  arbitrators or umpire making the award, And it is hereby
                  expressly stipulated and declared that it shall be a condition
                  precedent to any right of action or suit upon this policy that
                  the award by such arbitrator or umpire of the amount of the
                  loss or damage if disputed shall be first obtained.
                  ALTERATIONS AND REMOVALS Under any of the following
                  circumstances the insurance ceases to attach as regards the
                  property affected unless the Insured, <br />
                  before the occurrence of any loss or damage obtains the
                  sanction of the insurer signified by endorsement upon the
                  policy, by or on behalf of the insurer. (a) If the trade or
                  manufacture carried on be altered, or if the nature of the
                  occupation of or other circumstance affection the <br />
                  building or containing the insured property be changed in such
                  a way as to increase the risk of loss or damage. (b) If the
                  building insured or containing the insured property becomes
                  uncoupled and so remains for a period of more than 30 days.
                  <br />
                  (c) If the property insured be removed to any building or
                  place other than that in which is started herein to be
                  insured.
                  <br />
                  (d) If the interest in the property insured passes from the
                  insured otherwise
                  <br />
                  than by will or operation of law.
                  <br />
                  <br />
                  CLAIMS If any event giving rise to or likely to give rise to a
                  claim under this policy comes to his knowledge the insured
                  shall
                  <br />
                  (a) Immediately
                  <br />
                  (i) Take steps to minimize the loss or damage and recover any
                  missing property.
                  <br />
                  (ii) Give notice in writing to insured and
                  <br />
                  (iii) Give notice to the police if the event be theft or
                  suspected theft or wilful or
                  <br />
                  malicious damage. (b) Within 30 days or such further time as
                  the insurer may in writing allow deliver to the insurer
                  <br />
                  (i) A claim in writing for the damage containing as particular
                  an account as may be reasonably practical <br />
                  of all the several articles or items of property lost or
                  damage thereto respectively, having regard to their value at
                  the time of the loss or damage (ii) Particulars of all other
                  insurance’s if any.
                  <br />
                  The Insured shall at all times at this own expense produce,
                  procure and give to the Insurer
                  <br /> all such further particulars, plans, specifications,
                  books, vouchers, invoices, duplicates or copies thereof,
                  documents, proofs and information with respect to the claim
                  and the origin and cause of the loss or damage and the
                  circumstances under which the loss or damage occurred, and any
                  matter touching the liability or the amount of liability of
                  the Insurer as may be reasonably required buy or on behalf the
                  Insurer together with a declaration on oath or in other legal
                  form of the truth of the claim and any matters connected
                  therewith. INSURERS’ RIGHTS On the happening of any loss or
                  damage to any of the property insured by this policy the
                  Insurer may
                  <br />
                  a) Enter and take and keep possession of the building or
                  premises where the loss or damage has happened
                  <br />
                  b) Take possession of or require to be delivered to it any
                  property of the insured in
                  <br /> the buildings or on the premises at the time of the
                  loss or damage. c) Keep possession of any such property and
                  examine, sort, arrange remove or otherwise deal with the same
                  <br />
                  d) Sell any such property or dispose of the same for account
                  of whom it may concern
                  <br />
                  The powers conferred by this condition shall be exercisable by
                  the Insurer at any time unti
                  <br />l notice
                  <br /> in writing is given by the Insured that he makes no
                  claim under this policy or, If any claim is made, until such
                  claim is finally determined or withdrawn and the Insurer shall
                  not by any act done in the exercise or purported exercise of
                  its powers hereunder, incur any liability to the Insured or
                  diminish its rights to rely upon any of the conditions of this
                  policy in answer to any claim. If the Insured or any person
                  acting on his behalf shall not comply with the requirements of
                  the Insurer,
                  <br /> <br />
                  or shall hinder or obstruct the Insurer in the exercise of its
                  powers hereunder, all benefit under this policy shall be
                  forfeited. The Insured shall not in any case be entitled to
                  abandon any property to the Insurer whether taken possession
                  <br /> of by the Insurer or not 11.REPAIR AND REPLACEMENT. The
                  Insurer may at its option, repair or replace the property
                  damaged or destroyed, or any part thereof, instead of paying
                  the amount of the toss or damage, or may join with any other
                  Company or Insurers in so doing but the circumstances permit
                  and in reasonably sufficient manner, and in no case shall the
                  Insurer be bound to expend more in repair than it would have
                  cost to repair such property as it was at the time of the
                  occurrence of such loss or damage nor more than the sum
                  insured thereon. If the Insurer so elects to repair or replace
                  any property the Insured shall, at his own expense, furnish
                  the Insurer with such plans, specifications, measurements,
                  quantities and such other particulars as the Insurer may
                  require, and no acts done, or caused to be done buy the
                  Insurer with a view to repair or replacement shall be deemed
                  an election by the Insurer to repair or replace. If in any
                  case the Insurer shall be unable to repair replace the
                  property hereby insured, because of any municipal or other
                  regulations in force affecting the alignment of streets, or
                  the construction of buildings, or otherwise, the insurer
                  shall, in every such case, only be liable to pay such sum as
                  would be required to repair or replace such property if the
                  same could lawfully be repaired to its former condition.
                  12.TIME LIMIT In no case whatever shall the Insurer be liable
                  for any loss or damage after the expiration of twelve months
                  from the happening of the loss or damage unless the claim is
                  the subject of pending action or arbitration. REASONABLE
                  PRECAUTIONS. The Insured shall maintain the property in proper
                  state of repair and take all reasonable precautions to prevent
                  damage thereto. Pollution or Contamination EXCLUSIONS
                  Notwithstanding anything to the contrary contained herein,
                  this policy does not cover loss or destruction or damage
                  caused by pollution or contamination except (unless otherwise
                  excluded) destruction of or damage to the property insured
                  caused by a) Pollution or contamination which itself results
                  from fire, lightning, explosion, aircraft or <br />
                  other aerial devices or articles dropped therefrom, riot,
                  civil commotion, strikers, locked- out workers, persons taking
                  part in labour disturbances, malicious persons other than
                  thieves, earthquake, storm flood, bursting overflowing
                  discharging or leaking of water tanks apparatus or pipes,
                  sprinkler leakage or impact by any road vehicle or animal b)
                  any of the perils listed in (a) above which itself results
                  from pollution or contamination.
                  <br />
                  DEBRIS REMOVAL
                  <br />
                  The Company (Insurer) will not pay for any costs or expenses.
                  incurred in removing debris except from the site of such
                  property destroyed or damaged and the area immediately
                  adjacent to such site (2) arising from pollution or
                  contamination of property not insured by his policy.{" "}
                </PolicyPoint>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Firensurance;
