import React from "react";
import Layout from "../components/Layout";
import about from "../images/about.jpeg";
export default function About() {
  return (
    <Layout>
      <div className="header-article">
        <div className="container">
          <div className="row row-avatar">
            <div className="col">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row-fluid">
            <img
              src={about}
              style={{ borderRadius: 5, height: "50vh", width: "100%" }}
              alt="about_image"
            />
          </div>
        </div>
      </div>

      <div className="article-html">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <p>
                Financial accounting (or financial accountancy) is the field of
                accounting concerned with the{" "}
                <strong>summary, analysis and reporting</strong> of financial
                transactions related to a business.
              </p>
              <h1 id="objectives">Objectives</h1>
              <p>
                Financial accounting and financial reporting are often used as
                synonyms.
              </p>
              <ol>
                <li>
                  According to International Financial Reporting Standards: the
                  objective of financial reporting is:
                </li>
                <li>
                  To provide financial information that is useful to existing
                  and potential investors, lenders and other creditors in making
                  decisions about providing resources to the reporting entity.
                </li>
                <li>According to the European Accounting Association:</li>
              </ol>
              <h2 id="relevance">Relevance</h2>
              <p>
                Relevance is the capacity of the financial information to
                influence the decision of its users. The ingredients of
                relevance are the predictive value and confirmatory value.
                Materiality is a sub-quality of relevance.
              </p>
              <blockquote>
                <p>
                  The ingredients of relevance are the predictive value and
                  confirmatory value.
                </p>
              </blockquote>
              <p>
                Information is considered material if its omission or
                misstatement could influence the economic decisions of users
                taken on the basis of the financial statements.
              </p>
              <h2 id="faithful-representation">Faithful Representation</h2>
              <p>
                Faithful representation means that the actual effects of the
                transactions shall be properly accounted for and reported in the
                financial statements. The words and numbers must match what
                really happened in the transaction. The ingredients of faithful
                representation are completeness, neutrality and free from error.
              </p>
              <h2 id="enhancing-qualitative-characteristics">
                Enhancing Qualitative Characteristics
              </h2>
              <h3 id="verifiability">Verifiability</h3>
              <p>
                Verifiability implies consensus between the different
                knowledgeable and independent users of financial information.
                Such information must be supported by sufficient evidence to
                follow the principle of objectivity.
              </p>
              <h3 id="comparability">Comparability</h3>
              <p>
                Comparability is the uniform application of accounting methods
                across entities in the same industry. The principle of
                consistency is under comparability. Consistency is the uniform
                application of accounting across points in time within an
                entity.
              </p>
              <h3 id="understandability">Understandability</h3>
              <p>
                Understandability means that accounting reports should be
                expressed as clearly as possible and should be understood by
                those to whom the information is relevant. Timeliness:
                Timeliness implies that financial information must be presented
                to the users before a decision is to be made.
              </p>
              <hr />
              <h2 id="statement-of-cash-flows">Statement of cash flows</h2>
              <p>
                The statement of cash flows considers the inputs and outputs in
                concrete cash within a stated period. The general template of a
                cash flow statement is as follows: Cash Inflow - Cash Outflow +
                Opening Balance = Closing Balance
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Cash Inflow</th>
                    <th>Outflow</th>
                    <th>Opening Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <em>Monday</em>
                    </td>
                    <td>
                      <code>Tuesday</code>
                    </td>
                    <td>
                      <strong>Wednesday</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>Example 1:</strong> in the beginning of September, Ellen
                started out with $5 in her bank account. During that same month,
                Ellen borrowed $20 from Tom. At the end of the month, Ellen
                bought a pair of shoes for $7. Ellen&#39;s cash flow statement
                for the month of September looks like this:
              </p>
              <ul>
                <li>Cash inflow: $20</li>
                <li>Cash outflow:$7</li>
                <li>Opening balance: $5</li>
                <li>Closing balance: $20 – $7 + $5 = $18</li>
              </ul>
              <p>
                <strong>Example 2:</strong> in the beginning of June,
                WikiTables, a company that buys and resells tables, sold 2
                tables. They&#39;d originally bought the tables for $25 each,
                and sold them at a price of $50 per table. The first table was
                paid out in cash however the second one was bought in credit
                terms. WikiTables&#39; cash flow statement for the month of June
                looks like this:
              </p>
              <blockquote>
                <p>
                  <strong>Important:</strong> the cash flow statement only
                  considers the exchange of actual cash, and ignores what the
                  person in question owes or is owed.
                </p>
              </blockquote>
              <h2 id="statement-of-financial-position-balance-sheet-">
                Statement of financial position (balance sheet)
              </h2>
              <p>
                The balance sheet is the financial statement showing a
                firm&#39;s assets, liabilities and equity (capital) at a set
                point in time, usually the end of the fiscal year reported on
                the accompanying income statement.
              </p>
              <ul>
                <li>
                  <strong>fixed assets</strong>
                  <ul>
                    <li>property</li>
                    <li>building</li>
                    <li>equipment (such as factory machinery)</li>
                  </ul>
                </li>
                <li>
                  <strong>intangible assets</strong>
                  <ul>
                    <li>copyrights</li>
                    <li>trademarks</li>
                    <li>
                      patents
                      <ul>
                        <li>pending</li>
                        <li>international</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>goodwill</li>
              </ul>
              <p>
                Owner&#39;s equity, sometimes referred to as net assets, is
                represented differently depending on the type of business
                ownership. Business ownership can be in the form of a sole
                proprietorship, partnership, or a corporation. For a
                corporation, the owner&#39;s equity portion usually shows common
                stock, and retained earnings (earnings kept in the company).
                Retained earnings come from the retained earnings statement,
                prepared prior to the balance sheet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
