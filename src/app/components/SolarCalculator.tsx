import { useState } from "react";
import { Sun, DollarSign, Zap, TrendingDown } from "lucide-react";

export function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(15000);
  const [roofSize, setRoofSize] = useState(100);

  // Calculations
  const annualBill = monthlyBill * 12;
  const estimatedSystemSize = Math.min(roofSize * 0.15, (monthlyBill / 12) * 1.2); // kW
  const estimatedCost = estimatedSystemSize * 120000; // KSh per kW
  const annualSavings = annualBill * 0.7; // 70% savings
  const paybackPeriod = estimatedCost / annualSavings;
  const co2Savings = estimatedSystemSize * 1.5; // tons per year

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 lg:p-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">Solar Savings Calculator</h3>
        <p className="text-lg text-gray-600">Discover your potential savings with solar energy</p>
      </div>

      <div className="space-y-8">
        {/* Monthly Bill Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Monthly Electricity Bill (KSh)
          </label>
          <input
            type="range"
            min="5000"
            max="100000"
            step="1000"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #36AC43 0%, #36AC43 ${((monthlyBill - 5000) / 95000) * 100}%, #e5e7eb ${((monthlyBill - 5000) / 95000) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between mt-2">
            <span className="text-base text-gray-600">KSh 5,000</span>
            <span className="text-xl font-bold text-[#36AC43]">KSh {monthlyBill.toLocaleString()}</span>
            <span className="text-base text-gray-600">KSh 100,000</span>
          </div>
        </div>

        {/* Roof Size Input */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Available Roof Space (m²)
          </label>
          <input
            type="range"
            min="20"
            max="500"
            step="10"
            value={roofSize}
            onChange={(e) => setRoofSize(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #36AC43 0%, #36AC43 ${((roofSize - 20) / 480) * 100}%, #e5e7eb ${((roofSize - 20) / 480) * 100}%, #e5e7eb 100%)`
            }}
          />
          <div className="flex justify-between mt-2">
            <span className="text-base text-gray-600">20 m²</span>
            <span className="text-xl font-bold text-[#36AC43]">{roofSize} m²</span>
            <span className="text-base text-gray-600">500 m²</span>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#36AC43]/10 rounded-xl flex items-center justify-center">
                <Sun className="w-6 h-6 text-[#36AC43]" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">System Size</h4>
            </div>
            <p className="text-3xl font-bold text-[#36AC43]">{estimatedSystemSize.toFixed(1)} kW</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#36AC43]/10 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#36AC43]" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Estimated Cost</h4>
            </div>
            <p className="text-3xl font-bold text-[#36AC43]">KSh {estimatedCost.toLocaleString()}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#36AC43]/10 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#36AC43]" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Annual Savings</h4>
            </div>
            <p className="text-3xl font-bold text-[#36AC43]">KSh {annualSavings.toLocaleString()}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#36AC43]/10 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-[#36AC43]" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Payback Period</h4>
            </div>
            <p className="text-3xl font-bold text-[#36AC43]">{paybackPeriod.toFixed(1)} years</p>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white p-8 rounded-2xl mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-3xl">🌱</span>
            </div>
            <h4 className="text-2xl font-bold">Environmental Impact</h4>
          </div>
          <p className="text-xl mb-2">
            Your system will save approximately <span className="font-bold">{co2Savings.toFixed(1)} tons</span> of CO₂ emissions per year
          </p>
          <p className="text-lg opacity-90">
            That's equivalent to planting {Math.round(co2Savings * 50)} trees annually!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-6">
          <p className="text-lg text-gray-600 mb-6">
            These are estimated values. Get a precise quote from our experts!
          </p>
          <button className="px-12 py-5 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
