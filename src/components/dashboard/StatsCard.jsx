import React from 'react';
import Card, { CardContent } from '../ui/Card';

const StatsCard = ({ title, value, icon, color, trend }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return {
          bgLight: 'bg-blue-50',
          text: 'text-blue-700',
          iconBg: 'bg-blue-100',
        };
      case 'green':
        return {
          bgLight: 'bg-green-50',
          text: 'text-green-700',
          iconBg: 'bg-green-100',
        };
      case 'yellow':
        return {
          bgLight: 'bg-amber-50',
          text: 'text-amber-700',
          iconBg: 'bg-amber-100',
        };
      case 'indigo':
        return {
          bgLight: 'bg-indigo-50',
          text: 'text-indigo-700',
          iconBg: 'bg-indigo-100',
        };
      default:
        return {
          bgLight: 'bg-gray-50',
          text: 'text-gray-700',
          iconBg: 'bg-gray-100',
        };
    }
  };

  const colors = getColorClasses();

  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-center">
            <div className={`flex-shrink-0 rounded-md p-3 ${colors.iconBg} ${colors.text}`}>
              {icon}
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                <dd>
                  <div className="text-3xl font-semibold text-gray-900">{value}</div>
                </dd>
                {trend && (
                  <dd className="flex items-center text-sm mt-1">
                    <span className={trend.value >= 0 ? 'text-green-600' : 'text-red-600'}>
                      {trend.value >= 0 ? '+' : ''}
                      {trend.value}%
                    </span>
                    <span className="text-gray-500 ml-2">{trend.label}</span>
                  </dd>
                )}
              </dl>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
