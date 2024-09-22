import { NextResponse } from "next/server";
import crate from "node-crate";

export async function POST(req: Request) {
  try {
    const { timeRange, userId } = await req.json();
    console.log("Received request:", timeRange, userId);

    // Connect to CrateDB
    crate.connect(
      `https://admin:${encodeURIComponent(
        ",zR24_GD._P8Ll!*h9-Cx*CC"
      )}@bank-wallet.aks1.westeurope.azure.cratedb.net:4200`
    );

    console.log("in between");
    // Test the connection
    const clusterInfo = await crate.execute("SELECT name FROM sys.cluster");
    console.log("Connected to cluster:", clusterInfo);

    // Execute the main query
    const query = `
      SELECT DATE_TRUNC('day', timestamp) AS day,
             SUM(CASE WHEN transaction_type = 'ON_RAMP' THEN amount ELSE 0 END) AS on_ramp_amount,
             SUM(CASE WHEN transaction_type = 'TRANSFER' THEN amount ELSE 0 END) AS transfer_amount,
             MAX(balance) AS end_of_day_balance
      FROM payment_analytics
      WHERE user_id = ?
        AND timestamp > CURRENT_TIMESTAMP - INTERVAL '${timeRange}'
        AND status = 'SUCCESS'
      GROUP BY 1
      ORDER BY 1
    `;

    const result = await crate.execute(query, [userId]);
    console.log("Query result:", result.rows);

    // Return the result
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  } finally {
    // Close the connection
    crate.close();
  }
}
