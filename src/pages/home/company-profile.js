import Dropdiv from '@/components/Dropdiv';

export default function Home() {
  const containerStyle = {
    padding: '20px',
    lineHeight: '1.6',
    maxWidth: '1000px', // optional: to limit the width of the content
    margin: '0 auto', // optional: to center the content
  };

  const headingStyle = {
    marginTop: '20px',
    color: '#333', // optional: change the color of headings
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    color: 'black', // Set text color to black
  };

  return (
    <div>
      <Dropdiv />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Company Information</h1>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={cellStyle}>Field</th>
              <th style={cellStyle}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cellStyle}>Name of the Company</td>
              <td style={cellStyle}>City General Insurance Company Limited</td>
            </tr>
            <tr>
              <td style={cellStyle}>Legal Form</td>
              <td style={cellStyle}>A public limited company incorporated in Bangladesh on 18 March 1996 under the Companies Act 1994 and listed with Dhaka Stock Exchange Limited and Chittagong Stock Exchange PLC</td>
            </tr>
            <tr>
              <td style={cellStyle}>Commencement of Business</td>
              <td style={cellStyle}>25 March 1996</td>
            </tr>
            <tr>
              <td style={cellStyle}>Registered Office</td>
              <td style={cellStyle}>Baitul Hossain Building (4th floor), 27, Dilkusha C/A, Dhaka-1000.</td>
            </tr>
            <tr>
              <td style={cellStyle}>Telephone No.</td>
              <td style={cellStyle}>Phone: + 88 0222 3387296, 0222 3387281, 0222 3387278, 0222 3387247; Hotline: 01711695906</td>
            </tr>
            <tr>
              <td style={cellStyle}>Fax No.</td>
              <td style={cellStyle}>Fax: + 88 02 223357509; Cable: CITYINSUR</td>
            </tr>
            <tr>
              <td style={cellStyle}>Website</td>
              <td style={cellStyle}>www.cityinsurance.com.bd</td>
            </tr>
            <tr>
              <td style={cellStyle}>Email</td>
              <td style={cellStyle}>info@cityinsurance.com.bd</td>
            </tr>
            <tr>
              <td style={cellStyle}>Authorized Capital</td>
              <td style={cellStyle}>Tk. 2000.00 Million</td>
            </tr>
            <tr>
              <td style={cellStyle}>Paid-up Capital</td>
              <td style={cellStyle}>Tk. 681.66 Million</td>
            </tr>
            <tr>
              <td style={cellStyle}>Type of Organization</td>
              <td style={cellStyle}>Non-life Insurance company</td>
            </tr>
            <tr>
              <td style={cellStyle}>Nature of Business</td>
              <td style={cellStyle}>Fire, Marine, Motor, Miscellaneous insurance, etc.</td>
            </tr>
            <tr>
              <td style={cellStyle}>Number of Directors</td>
              <td style={cellStyle}>14 (Fourteen)</td>
            </tr>
            <tr>
              <td style={cellStyle}>Chairman</td>
              <td style={cellStyle}>Mr. Hossain Akhtar</td>
            </tr>
            <tr>
              <td style={cellStyle}>Chief Executive Officer</td>
              <td style={cellStyle}>Mr. Md. Shamim Hossain</td>
            </tr>
            <tr>
              <td style={cellStyle}>Number of Shareholders</td>
              <td style={cellStyle}>…………. (As on 31 December 2023)</td>
            </tr>
            <tr>
              <td style={cellStyle}>Number of Branches</td>
              <td style={cellStyle}>45 (Forty five)</td>
            </tr>
            <tr>
              <td style={cellStyle}>Number of Employees</td>
              <td style={cellStyle}>…… (As on 31 December 2023)</td>
            </tr>
            <tr>
              <td style={cellStyle}>Listed with Dhaka Stock Exchange Ltd.</td>
              <td style={cellStyle}>8 November 2007</td>
            </tr>
            <tr>
              <td style={cellStyle}>Listed with Chittagong Stock Exchange PLC</td>
              <td style={cellStyle}>22 October 2008</td>
            </tr>
            <tr>
              <td style={cellStyle}>Business Motto</td>
              <td style={cellStyle}>Economic development through risk minimization and effective client services.</td>
            </tr>
            <tr>
              <td style={cellStyle}>Statutory Auditor</td>
              <td style={cellStyle}>Islam Quazi Shafique & Co. Chartered Accountants Al-Haj Shamsuddin Mansion (4th Floor) 17, New Eskaton Road, Moghbazar, Dhaka-1000</td>
            </tr>
            <tr>
              <td style={cellStyle}>Compliance Professional</td>
              <td style={cellStyle}>Salahuddin & Associates Chartered Secretaries 55, Purana Paltan, 16/B, Noakhali Tower Dhaka-1000, Mobile: +880-130900599</td>
            </tr>
            <tr>
              <td style={cellStyle}>Credit Rating Agency</td>
              <td style={cellStyle}>Credit Rating Agency of Bangladesh Ltd. (CRAB)</td>
            </tr>
            <tr>
              <td style={cellStyle}>Rating Grade</td>
              <td style={cellStyle}>AA- (Double A Minus)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
