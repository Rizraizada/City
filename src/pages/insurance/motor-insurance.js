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

const Motor = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    {
      id: "tab1",
      title: "Motor Insurance",
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
           .policy-text{
          width: 250px;
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
          .policy-text{
          width: 250px;
          }
      }

      @media (max-width: 576px) {
        .main-container {
          padding: 0.75rem;
        }

         .policy-text{
          width: 250px;
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
                Motor Insurance
              </h2>

              <div className="policy-points">
                <PolicyPoint>
                  SECTION-1 : OWN DAMAGE <br />
                  The insurer will indemnify the insured against loss or damage
                  to the Motor Vehicle and or its accessories whilst thereon;
                  <br />
                  a) by fire, explosion, self ignition or lightning;
                  <br />
                  b) by burglary, housebreaking or theft;
                  <br />
                  c) by Riot and Strike including malicious activities;
                  <br />
                  d) by Earthquake (Fire and Shock damage);
                  <br />
                  e) by Flood, Typhoon, Hurricane, Storm, Tempest, Inundation,
                  Cyclone, Hailstorm, Forst;
                  <br />
                  f) by accidental external means;
                  <br />
                  g) whilst in transit by road, rail, inland waterway, lift,
                  elevator or air;
                  <br />
                  h) act liability.
                  <br />
                  Subject to a deduction for depreciation at the scale mentioned
                  below in respect of parts replaced;
                  <br />
                  1. For all rubber, nylon, plastic parts, tyre and battery 50%
                  <br />
                  2. For all parts made of glass Nill
                  <br />
                  3. All other parts <br />
                  AGE OF CAR % OF DEPRECIATION
                  <br />
                  Up to 1 year Nil
                  <br />
                  Between 1 year and 2 year 10%
                  <br />
                  Between 2 year and 3 year 15%
                  <br />
                  Between 3 year and 4 year 20%
                  <br />
                  Between 4 year and 5 year 25%
                  <br />
                  Between 5 year and 6 year 30%
                  <br />
                  Between 6 year and 7 year 40%
                  <br />
                  Over 7 Years 50%
                  <br />
                  The insurer shall not be liable to make any payment in respect
                  of ;<br />
                  a) Consequential loss, depreciation, wear and tear, mechanical
                  and electrical breakdowns failures or breakages and
                  <br />
                  b) damage to Tyres unless the Motor Vehicle is damaged at the
                  same time when the liability of the insurer <br />
                  is limited to 50% of cost of replacement. c) any accidental
                  loss or damage suffered whilst the insured or any person
                  driving with the knowledge and
                  <br /> consent of the insured is under the influence of
                  intoxicating, liquor or drugs. In the event of the Motor
                  Vehicle being disabled by reason of loss or damage covered
                  under this policy the insurer
                  <br /> will bear the reasonable cost of protection and removal
                  to the nearest repairers and of redelivery to the insured but
                  not exceeding in all Tk.1000/- (one thousand) in respect of
                  anyone accident. The insured may authorise the repair of the
                  Motor Vehicle necessitated by damage for which the insurer{" "}
                  <br />
                  may be liable under this policy provided that: a) the
                  estimated cost of such repair does not exceed Tk.5000/- (Five
                  thousand)
                  <br />
                  b) the insurer, be furnished forthwith a detailed estimate of
                  the cost and
                  <br />
                  c) the insured shall give the insurer every assistance to see
                  that such repair is necessary and the charge reasonable.
                  <br />
                  COMPULSORY EXCESS (APPLICABLE TO SECTION – Ι)
                  <br />
                  a) The insurer shall not be liable for the first amount
                  indicated below or any less expenditure which may
                  <br /> be incurred being the first part of any expenditure for
                  which provision as made under Section-1 of this Policy in
                  respect of each and every event occurring whilst the Motor
                  Vehicle is being driven or is for the purpose of being driven
                  by him in the charge of any person who; is under 25 years of
                  age <br /> Tk. 1000/- b) is over 25 years of age and
                  <br />
                  I. has held a valid driving license other than learner’s
                  driving license for a period more than 2 years but less than 3
                  years <br />
                  Tk. 500/-
                  <br />
                  II. has held a valid driving license other than learner’s
                  license
                  <br />
                  for a period more than 1 years but less than 2 years
                  <br />
                  Tk. 700/-
                  <br />
                  III. has held a valid driving license other than learner’s
                  driving license
                  <br />
                  for a period less than 1 year
                  <br />
                  Tk. 800/-
                  <br />
                  If the expenditure incurred by the insurer shall include the
                  amount for which insured is responsible hereby
                  <br /> such amount shall be repaid by the insured forthwith.
                  I. For the purposes of this Clause the expression “event”
                  shall mean an event or series of events arising <br />
                  out of one cause in connection with the Motor Vehicle. II.
                  This Clause shall not apply to loss or damage caused by fire,
                  self ignition, lightning or explosion.
                  <br />
                  SECTION – II LIABILITY TO THIRD PARTIES
                  <br />
                  1. The Insurer will indemnify the insured in the event of
                  accident caused by or arising out of the use of the motor
                  vehicle against all sums including claimant’s costs and
                  expenses which the insured shall become legally liable to pay
                  in respect of;
                  <br />
                  I. death of or bodily injury to any person but except so far
                  as is necessary to meet the requirements of section 110 of the
                  Motor Vehicle Act, 1991 the Insurer shall not be liable where
                  such death or injury arises out of and in course of the
                  employment of such person by the Insured.
                  <br />
                  II. damage to property other than property belonging to the
                  insured or held in trust by or in the custody or control of
                  the insured.
                  <br />
                  2. The Insurer will pay all costs and expenses incurred with
                  its written consent.
                  <br />
                  3. In terms of and subject to the limitations of the indemnity
                  which is granted by this section to the insured the insurer
                  will indemnify any driver who is driving the Motor Vehicle on
                  the insured’s order or with his permission provided that such
                  driver shall
                  <br /> as though they were the insured observe fulfill and be
                  subject to the terms, exceptions and conditions of this policy
                  in so far as they can apply.
                  <br />
                  4. In the event of the death of any person entitled to
                  indemnity under this policy the insurer will in respect of the
                  liability incurred by such person Indemnity his personal
                  representatives in the terms of and subject to the limitations
                  of this policy provided
                  <br /> that such personal representatives shall as though they
                  were the insured observe fulfill and be subject to the terms
                  exceptions and conditions of this policy in so far as they can
                  apply.
                  <br />
                  5. The insurer may at own option (A) arrange for
                  representation at any inquest of Fatal inquiry in respect of
                  any death which may be the subject of Indemnity under this
                  section and (B) undertake the defense of proceedings in any
                  Court of Law in respect of any act
                  <br /> or alleged offence causing or relating to any event
                  which may be the subject of indemnity under this section.
                  <br />
                  AVOIDANCE OF CERTAIN TERMS AND RIGHT OF RECOVERY
                  <br />
                  Nothing in this policy or any endorsement hereon shall affect
                  the right of any person indemnified <br />
                  by this policy or any other person to recover an amount under
                  or by virtue of the provision of the Motor Vehicles Act. But
                  the insured shall repay to the insurer all sums paid by the
                  insurer which the insurer would not
                  <br /> have been liable to pay but for the said provisions.
                  GENERAL EXCEPTIONS
                  <br />
                  (Applicable to all section of the Policy)
                  <br />
                  The insurer shall not be liable under this policy in respect
                  of:
                  <br />
                  any accident, loss, damage and/or liability caused sustained
                  or incurred outside the Geographical Area.
                  <br />
                  any claim arising out of any contractual liability.
                  <br />
                  any accident loss, damage and/or liability caused sustained or
                  incurred whilst any Motor Vehicle in respect <br />
                  of or in connection with which insurance is granted under this
                  policy is : a) being used otherwise than in accordance with
                  the Limitations as to Use.
                  <br />
                  b) being driven by any person other than a Driver as stated in
                  the Driver’s
                  <br />
                  a) any accident loss or damage to any property whatsoever or
                  any loss or expense whatsoever
                  <br /> resulting or arising therefrom or any consequential
                  loss. b) any liability of whatsoever nature. directly or
                  indirectly caused by or contributed to by or arising from
                  ionising radiations or
                  <br /> contamination by radioactivity from any nuclear fuel or
                  from any nuclear waste from the combustion of nuclear fuel.
                  For the purposes of this exception combustion shall include
                  any self sustaining process or nuclear fission. any accident
                  loss, damage or liability directly or indirectly and caused by
                  or contributed to
                  <br /> by or arising from nuclear weapons material. any
                  accident loss, damage and/or liability directly or indirectly
                  or proximately or remotely
                  <br /> occasioned by contributed by or traceable to or arising
                  out of or in connection with War, Invasion, the Act of foreign
                  enemies, hostilities or warlike operation ( whether before or
                  after declaration of war ) Civil War, Mutiny, Rebellion,
                  Military or usurped power or by any direct or indirect
                  consequences of any of the said occurrences and in the event
                  of any claim hereunder the Insured shall prove that the
                  accident loss damage and/or liability arose independently of
                  and was in no way connected with or occasioned by or
                  contributed to by or traceable to any of the said occurrences
                  or any consequences there of and in default of such proof the
                  insurer shall not be liable to make any payment in respect of
                  such a claim. CONDITIONS
                  <br />
                  This policy and the schedule shall be read together and any
                  word or expression to which a <br />
                  specific meaning has been attached in any part of this policy
                  or of the schedule shall bear the same meaning wherever it may
                  appear. Notice shall be given in writing to the insurer
                  immediately upon the occurrence of any accident or <br />
                  loss or damage and in the event of any claim and thereafter
                  the insured shall give all such information and assistance as
                  the insurer shall require. Every letter claim writ summons
                  and/or process or a copy thereof shall be forwarded to the
                  insurer immediately on receipt of the insured. Notice shall
                  also be given in writing to the insurer immediately the
                  insured shall have knowledge of any impencing Prosecution.
                  Inqeust or Fatal Inquiry in respect of any occurrence which
                  may give rise to a claim under this policy. In case of theft,
                  or criminal act which may be the subject of a claim under this
                  policy the insured shall give immediate notice to the police
                  and co-operate with the insurer in securing the conviction of
                  the offender. No admission, offer, promise, payment or
                  indemnity shall be made or given by or on behalf of the <br />
                  Insured without the written consent of the insurer which shall
                  be entitled if it so desires to take over and conduct in the
                  name of the insured the defense or settlement of any claim or
                  to prosecute in the name of the Insured for its own benefit
                  any claim for indemnity or otherwise and shall have full
                  discretion in the conduct of any proceeding or in the
                  settlement of any claim and the insured shall give all such
                  information and assistance as the insure may require. The
                  insurer may at its own option repair reinstate or replace the
                  Motor Vehicle or part there of and/or
                  <br /> its accessories or may pay in cash the amount of the
                  loss or damage and the liability of the insurer shall not
                  exceed the actual value of the parts damaged or lost less
                  depreciation plus the reasonable cost of fitting and shall in
                  no case exceeds the insured’s estimate of the value of the
                  Motor Vehicle (including accessories thereon) as specified in
                  the schedule or the Value of the Motor Vehicle (including
                  accessories thereon) at the time of the loss or damage
                  whichever is the less. The Insured shall take all reasonable
                  steps to safeguard the Motor Vehicle from loss, damage and to
                  maintain <br />
                  it in efficient condition and the insurer shall have at all
                  times free and full access to examine the Motor Vehicle or any
                  part thereof or any driver or employee of the insured. In the
                  event of any accident or breakdown, the Motor Vehicle shall
                  not be left unattended without proper precautions being taken
                  to prevent further damage or loss and it the Motor Vehicle be
                  driven before the necessary repairs are effected any extension
                  of the damage or any further damage to the Motor Vehicle shall
                  be entirely at the insured’s own risk. The insurer may cancel
                  the policy by sending seven days notice by registered letter
                  to the insured at his last
                  <br /> known address and in such event will return to the
                  insured the premium paid less the pro-rata portion thereon for
                  the period the policy has been in force or the policy may be
                  cancelled at any time by the insured on seven day’s notice and
                  (provided no claim has arisen during the currency of the
                  policy) the insured shall be entitled to a return of premium
                  less premium at the insurer short period rates for the period
                  the policy has been in force. However where the ownership of
                  the vehicle is transferred the policy cannot be cancelled
                  unless evidence that the vehicle is insured elsewhere in
                  produced. If at any time any claim arises under this policy
                  there is any other existing insurance covering the
                  <br /> same loss, damage or liability the insurer shall not be
                  liable to pay or contribute more than its rate able proportion
                  of the loss, damage compensation, costs or expenses. If any
                  difference shall arise as to the quantum to be paid under this
                  policy (liability being otherwise admitted) such difference
                  shall independently of all other questions be referred to the
                  decision of an arbitrator to be appointed in writing by the
                  parties in difference or of if they cannot agree upon a single
                  arbitrator to the decision of two disinterested persons as
                  arbitrators of whom one shall be appointed in writing by each
                  of the parties within two calendar months after having been
                  required to do so in writing by the other party in time and
                  for the time being in force. In case either party shall refuse
                  or fail to appoint arbitrator within two calender months after
                  receipt of notice in writing requiring an appointment the
                  other party shall be at liberty to appoint sole arbitrator and
                  in case of disagreement between the arbitrators the difference
                  shall be referred to the decision of an Umpire who shall have
                  been appointed by them in writing before entering on the
                  reference and who shall sit with the arbitrators and preside
                  at the meeting. It is clearly agreed and understood that no
                  difference or dispute shall be referred to arbitration as{" "}
                  <br />
                  herein before provide if the insurer has disputed or not
                  accepted liability under or in respect of this policy. It is
                  hereby expressly stipulated and declared that it shall be a
                  condition precedent to any right of
                  <br /> action or suit upon this policy that award by such
                  arbitrators or umpire of the amount of the loss or damage
                  shall be first obtained. If is also hereby further expressly
                  agreed and declared that if the insurer shall disclaim
                  liability to the insured for any claim hereunder and such
                  claim shall not within twelve calendar months from the date of
                  such disclaimer have been made the subject matter of a suit in
                  a Court of Law then the claim shall for all purposes be deemed
                  to have been abandoned and shall not thereafter be recoverable
                  hereunder. The due observance and fulfillment of the terms,
                  conditions and endorsement of this policy in so far as they
                  relate to anything to be done or complied with by the insured
                  and the truth of the statements and answers in the said
                  proposal shall be conditions precedent to any liability of the
                  insurer to make any payment under this policy. NO CLAIM BONUS
                  A rebate in accordance with the following scale may be allowed
                  by way of deduction from the premium required for the next
                  renewal of the insurance on each vehicle in connection with
                  which No Claim has been made or is pending in respect of the
                  under noted period of insurance. No claim made or pending
                  during the preceding year of Insurance
                  …………………..30% No claim made or pending
                  during the preceding 2 consecutive years of Insurance
                  …………………..40% No claim made or pending during
                  the preceding 3 consecutive years of Insurance
                  …………………….50% LOSS OF NO CLAIM BONUS The No Claim
                  Bonus should not be totally withdrawn in the event of claim
                  but should be reduced by two steps for each claim untill the
                  insured has reached the basic premium. The period of
                  qualification for bonus then commence de novo as from the next
                  renewal date. SCHEDULE OF LOADING
                  <br />
                  If the insured is not entitled to any No Claim Bonus and made
                  any Claim or Claims during the
                  <br /> preceding period of Insurance the basic premium at next
                  renewal shall be loaded in accordance with the following
                  scale. One claim in preceding period of Insurance <br /> 30%
                  of Basic Premium Two claims in preceding period of Insurance{" "}
                  <br /> 40% of Basic Premium Three claims in preceding period
                  of Insurance <br /> 50% of Basic Premium IMPORTANT NOTICE 1.
                  Intimation of accident and intimation of claim under the
                  policy must ordinarily be given within 24 hours but not later
                  than 48 hours of the accident under any circumstances.
                  <br />
                  2. The affected vehicle must not be removed from the place of
                  accident before inspection of the same by the Surveyor and /
                  or representative of the company.
                  <br />
                  3. The affected vehicle must not be placed to any workshop
                  without writer consent of the Company.
                  <br />
                  4. The affected vehicle must be kept at the place of accident
                  duly guarded and cared till inspection of the same is
                  complete.
                  <br />
                  5. Photocopies of Blue Book, Tax Token, Fitness Certificate,
                  Route Permit and Driver’s Licence should always be available
                  with
                  <br /> the insured so that the same may be presented to the
                  Surveyor/Company’s representative immediately on demand.
                  Originals should also be submitted for verification as and
                  when asked for.
                </PolicyPoint>
              </div>
            </motion.div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Motor;
