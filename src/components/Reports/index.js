import React from 'react';
import styles from './index.module.css';
import { Shield, HandCoins, FileText, CreditCard, FileSpreadsheet, FileBarChart } from 'lucide-react';

const ReportItem = ({ icon: Icon, title, description }) => (
  <div className={styles.reportItem}>
    <div className={styles.iconContainer}>
      <Icon className={styles.icons} />
    </div>
    <div className={styles.content}>
      <Icon className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

const Reports = () => {
  const reports = [
    {
      icon: Shield,
      title: "Price Sensitive",
      description: "Price-sensitive information is still confidential information that could influence the share price of a company."
    },
    {
      icon: HandCoins,
      title: "Financial Highlights",
      description: "Financial highlights are key financial data and metrics that provide an overview of a company's quarterly reports."
    },
    {
      icon: FileText,
      title: "Directors Report",
      description: "It is typically included in the is intended to provide shareholders, investors, and other stakeholders with insights."
    },
    {
      icon: HandCoins,
      title: "Credit Rating",
      description: "Credit Rating highlights are key financial data and metrics that provide an overview of our company."
    },
    {
      icon: FileSpreadsheet,
      title: "Annual Report",
      description: "That provides an overview of a company's performance and financial condition over the course of a year."
    },
    {
      icon: FileBarChart,
      title: "Quarterly Report",
      description: "Typically covering a three-month period. Quarterly reports are prepared by companies to provide shareholders."
    }
  ];

  return (
    <div className={styles.ports}>
    <div className={styles.reportsContainer}>
      {reports.map((report, index) => (
        <ReportItem key={index} {...report} />
      ))}
    </div>
    </div>

  );
};

export default Reports;
