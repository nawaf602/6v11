import React, { useState } from 'react';
import ArbitrageOpportunityCard from './ArbitrageOpportunityCard';

const ArbitrageOpportunitiesList = () => {
  // Sample data for arbitrage opportunities
  const [opportunities, setOpportunities] = useState([
    {
      id: '1',
      type: 'simple',
      sourceExchange: 'Uniswap V3',
      targetExchange: 'SushiSwap',
      tokenPath: ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0x6B175474E89094C44Da98b954EedeAC495271d0F', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'],
      inputAmount: '1000000000000000000', // 1 ETH
      expectedOutputAmount: '1020000000000000000', // 1.02 ETH
      expectedProfit: '20000000000000000', // 0.02 ETH
      expectedProfitPercentage: '2.0',
      gasCost: '5000000000000000', // 0.005 ETH
      netProfit: '15000000000000000', // 0.015 ETH
      timestamp: Date.now(),
      confidence: 0.92
    },
    {
      id: '2',
      type: 'triangular',
      sourceExchange: 'Uniswap V2',
      targetExchange: 'Curve',
      intermediateExchanges: ['Balancer'],
      tokenPath: ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0x6B175474E89094C44Da98b954EedeAC495271d0F', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'],
      inputAmount: '2000000000000000000', // 2 ETH
      expectedOutputAmount: '2050000000000000000', // 2.05 ETH
      expectedProfit: '50000000000000000', // 0.05 ETH
      expectedProfitPercentage: '2.5',
      gasCost: '8000000000000000', // 0.008 ETH
      netProfit: '42000000000000000', // 0.042 ETH
      timestamp: Date.now(),
      confidence: 0.85
    },
    {
      id: '3',
      type: 'multi_step',
      sourceExchange: 'Uniswap V3',
      targetExchange: 'dYdX',
      intermediateExchanges: ['SushiSwap', 'Balancer'],
      tokenPath: ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'],
      inputAmount: '5000000000000000000', // 5 ETH
      expectedOutputAmount: '5150000000000000000', // 5.15 ETH
      expectedProfit: '150000000000000000', // 0.15 ETH
      expectedProfitPercentage: '3.0',
      gasCost: '12000000000000000', // 0.012 ETH
      netProfit: '138000000000000000', // 0.138 ETH
      timestamp: Date.now(),
      confidence: 0.78
    }
  ]);

  const handleExecute = (opportunity) => {
    // In a real implementation, this would call the API to execute the arbitrage
    console.log(`Executing arbitrage opportunity ${opportunity.id}`);
    
    // For demonstration, we'll remove the opportunity from the list
    setOpportunities(opportunities.filter(opp => opp.id !== opportunity.id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Arbitrage Opportunities</h2>
      
      {opportunities.length === 0 ? (
        <div className="card p-8 text-center">
          <p className="text-secondary-500">No arbitrage opportunities available at the moment.</p>
          <p className="text-sm text-secondary-400 mt-2">The bot will automatically detect new opportunities.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map(opportunity => (
            <ArbitrageOpportunityCard 
              key={opportunity.id} 
              opportunity={opportunity} 
              onExecute={handleExecute} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArbitrageOpportunitiesList;
