import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

// Component that accepts image URLs as props
const EscrowAnimation = ({ 
  buyerImage = assets.buyer_icon, 
  sellerImage = assets.seller_icon, 
  escrowImage = assets.treasurit_symbol,
  stageImages = [
    assets.doc_verification_icon,
    assets.escrow_logo,
    assets.buyer_agreement_icon,
    assets.seller_agreement_icon,
    assets.secured_money_icon,
    assets.goods_icon,
    assets.money_unlock_icon,
    assets.agreement_icon,
  ]
}) => {
  const [transactionStep, setTransactionStep] = useState(0);
  const [showStepText, setShowStepText] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [showBuyerTube, setShowBuyerTube] = useState(false);
  const [showSellerTube, setShowSellerTube] = useState(false);
  
  const transactionStages = [
    { id: 0, step: "Step 1", text: "Identity Verification" },
    { id: 1, step: "Step 2", text: "Quick Account Setup" },
    { id: 2, step: "Step 3", text: "Buyer Defines Terms" },
    { id: 3, step: "Step 4", text: "Seller Accepts Conditions" },
    { id: 4, step: "Step 5", text: "Secure Fund Deposit" },
    { id: 5, step: "Step 6", text: "Product/Service Delivery" },
    { id: 6, step: "Step 7", text: "Payment Release to Seller" },
    { id: 7, step: "Step 8", text: "Transaction Complete" },
  ];

  // Updated colors to match reference image
  const pathColor = "#CCCCCC"; // Lighter gray for paths
  const buyerTubeColor = "#FF8A65"; // Orange for buyer
  const sellerTubeColor = "#FF8A65"; // Orange for seller
  const displayBoxColor = "#FFF5EC"; // Light peach color for display box
  
  // Updated coordinates for more compact layout with circular image holders
  const paths = {
    // Buyer to Middle path (straight line with slight curve)
    buyerToMiddle: {
      type: "quadratic",
      start: { x: 250, y: 180 },
      control: { x: 400, y: 190 },
      end: { x: 550, y: 300 }
    },
    
    // Middle to Escrow (straight line)
    middleToEscrow: {
      type: "line",
      start: { x: 550, y: 300 },
      end: { x: 630, y: 300 }
    },
    
    // Escrow to Display (line)
    escrowToDisplay: {
      type: "line",
      start: { x: 720, y: 300 },
      end: { x: 800, y: 300 }
    },
    
    // Seller to Middle path (straight line with slight curve)
    sellerToMiddle: {
      type: "quadratic",
      start: { x: 250, y: 435 },
      control: { x: 400, y: 425 },
      end: { x: 550, y: 300 }
    }
  };

  // Get a position along a path based on progress (0-1)
  const getPositionOnPath = (path, progress) => {
    if (!path) return { x: 0, y: 0 };
    
    if (path.type === "line") {
      // Linear interpolation for straight lines
      return {
        x: path.start.x + (path.end.x - path.start.x) * progress,
        y: path.start.y + (path.end.y - path.start.y) * progress
      };
    } else if (path.type === "quadratic") {
      // Quadratic Bezier formula: (1-t)²P₀ + 2(1-t)tP₁ + t²P₂
      const t = progress;
      const mt = 1 - t;
      return {
        x: mt * mt * path.start.x + 2 * mt * t * path.control.x + t * t * path.end.x,
        y: mt * mt * path.start.y + 2 * mt * t * path.control.y + t * t * path.end.y
      };
    }
    
    return { x: 0, y: 0 };
  };

  // Get animation points for the moving tube from buyer
  const getBuyerTubePoints = () => {
    if (!showBuyerTube) return [];
    
    const points = [];
    const numPoints = 5; // Number of trailing points
    
    // Different paths based on the current step
    if (transactionStep === 0 || transactionStep === 1 || transactionStep === 7) {
      // Stages 1, 2 and 8: Buyer to display box via middle
      // Determine which path segment we're on based on progress
      if (animationProgress < 0.4) {
        // First segment: Buyer to Middle
        const adjustedProgress = animationProgress / 0.4;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.buyerToMiddle, pointProgress));
        }
      } else if (animationProgress < 0.7) {
        // Second segment: Middle to Escrow
        const adjustedProgress = (animationProgress - 0.4) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.middleToEscrow, pointProgress));
        }
      } else {
        // Third segment: Escrow to Display
        const adjustedProgress = (animationProgress - 0.7) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.escrowToDisplay, pointProgress));
        }
      }
    } else if (transactionStep === 2 || transactionStep === 4) {
      // Stages 3 and 5: Buyer to display box via middle
      // Same animation path as above
      if (animationProgress < 0.4) {
        // First segment: Buyer to Middle
        const adjustedProgress = animationProgress / 0.4;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.buyerToMiddle, pointProgress));
        }
      } else if (animationProgress < 0.7) {
        // Second segment: Middle to Escrow
        const adjustedProgress = (animationProgress - 0.4) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.middleToEscrow, pointProgress));
        }
      } else {
        // Third segment: Escrow to Display
        const adjustedProgress = (animationProgress - 0.7) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.escrowToDisplay, pointProgress));
        }
      }
    }
    
    return points;
  };

  // Get animation points for the moving tube from seller
  const getSellerTubePoints = () => {
    if (!showSellerTube) return [];
    
    const points = [];
    const numPoints = 5; // Number of trailing points
    
    // Different paths based on the current step
    if (transactionStep === 0 || transactionStep === 1 || transactionStep === 7) {
      // Stages 1, 2 and 8: Seller to display box via middle
      if (animationProgress < 0.4) {
        // First segment: Seller to Middle
        const adjustedProgress = animationProgress / 0.4;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.sellerToMiddle, pointProgress));
        }
      } else if (animationProgress < 0.7) {
        // Second segment: Middle to Escrow
        const adjustedProgress = (animationProgress - 0.4) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.middleToEscrow, pointProgress));
        }
      } else {
        // Third segment: Escrow to Display
        const adjustedProgress = (animationProgress - 0.7) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.escrowToDisplay, pointProgress));
        }
      }
    } else if (transactionStep === 3) {
      // Stage 4: Seller to display box via middle
      if (animationProgress < 0.4) {
        // First segment: Seller to Middle
        const adjustedProgress = animationProgress / 0.4;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.sellerToMiddle, pointProgress));
        }
      } else if (animationProgress < 0.7) {
        // Second segment: Middle to Escrow
        const adjustedProgress = (animationProgress - 0.4) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.middleToEscrow, pointProgress));
        }
      } else {
        // Third segment: Escrow to Display
        const adjustedProgress = (animationProgress - 0.7) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.escrowToDisplay, pointProgress));
        }
      }
    } else if (transactionStep === 5) {
      // Stage 6: For product delivery, we'll use the same path from seller to display
      if (animationProgress < 0.4) {
        // First segment: Seller to Middle
        const adjustedProgress = animationProgress / 0.4;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.sellerToMiddle, pointProgress));
        }
      } else if (animationProgress < 0.7) {
        // Second segment: Middle to Escrow
        const adjustedProgress = (animationProgress - 0.4) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.middleToEscrow, pointProgress));
        }
      } else {
        // Third segment: Escrow to Display
        const adjustedProgress = (animationProgress - 0.7) / 0.3;
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.escrowToDisplay, pointProgress));
        }
      }
    } else if (transactionStep === 6) {
      // Stage 7: Display box to seller
      // Reverse path animation
      if (animationProgress < 0.3) {
        // First segment: Display to Escrow (reverse)
        const adjustedProgress = 1 - (animationProgress / 0.3);
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.escrowToDisplay, pointProgress));
        }
      } else if (animationProgress < 0.6) {
        // Second segment: Escrow to Middle (reverse)
        const adjustedProgress = 1 - ((animationProgress - 0.3) / 0.3);
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.middleToEscrow, pointProgress));
        }
      } else {
        // Third segment: Middle to Seller (just reuse sellerToMiddle in reverse)
        const adjustedProgress = 1 - ((animationProgress - 0.6) / 0.4);
        for (let i = 0; i < numPoints; i++) {
          const pointProgress = Math.max(0, adjustedProgress - (i * 0.05));
          if (pointProgress <= 0) continue;
          points.push(getPositionOnPath(paths.sellerToMiddle, pointProgress));
        }
      }
    }
    
    return points;
  };

  useEffect(() => {
    const stepDuration = 6000; // Total duration for each stage
    const animationDuration = 3000; // Animation time (half of step duration)
    
    // Reset animation at the start of each step
    setAnimationProgress(0);
    setShowBuyerTube(false);
    setShowSellerTube(false);
    
    // Determine which tubes to show based on the step
    const showTubesForStep = () => {
      if (transactionStep === 0 || transactionStep === 1 || transactionStep === 7) {
        // Stage 1, 2 and 8: Both buyer and seller tubes
        setShowBuyerTube(true);
        setShowSellerTube(true);
      } else if (transactionStep === 2 || transactionStep === 4) {
        // Stage 3 and 5: Only buyer tube
        setShowBuyerTube(true);
        setShowSellerTube(false);
      } else if (transactionStep === 3) {
        // Stage 4: Only seller tube
        setShowBuyerTube(false);
        setShowSellerTube(true);
      } else if (transactionStep === 5) {
        // Stage 6: Only seller tube for product delivery
        setShowBuyerTube(false);
        setShowSellerTube(true);
      } else if (transactionStep === 6) {
        // Stage 7: Display to seller
        setShowBuyerTube(false);
        setShowSellerTube(true);
      }
    };
    
    // Start animation
    setTimeout(() => {
      showTubesForStep();
    }, 500);
    
    // Animate the tubes moving along the paths
    const startTime = Date.now();
    const animationInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      setAnimationProgress(progress);
      
      if (progress >= 1) {
        clearInterval(animationInterval);
        setShowBuyerTube(false);
        setShowSellerTube(false);
      }
    }, 16);
    
    // Show step text after initial animation
    const textTimer = setTimeout(() => {
      setShowStepText(true);
    }, 1500);
    
    // Show image later
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 3000);
    
    // Move to next step
    const stepTimer = setTimeout(() => {
      setTransactionStep((prevStep) => (prevStep + 1) % transactionStages.length);
      setShowStepText(false);
      setShowImage(false);
    }, stepDuration);
    
    return () => {
      clearInterval(animationInterval);
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
      clearTimeout(stepTimer);
    };
  }, [transactionStep]);

  const currentStage = transactionStages[transactionStep];
  const buyerTubePoints = getBuyerTubePoints();
  const sellerTubePoints = getSellerTubePoints();

  return (
    <div className="w-full h-auto overflow-hidden relative bg-amber-50">
      {/* Responsive SVG container with better mobile scaling */}
      <div className="w-full" style={{ minHeight: "300px" }}> {/* Set minimum height for small screens */}
        <svg 
          viewBox="0 0 1200 600" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full"
          style={{ minHeight: "300px" }} // Ensure minimum height on small screens
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background paths - render these first so they don't overlap with circles */}
          
          {/* Buyer to Middle path */}
          <path
            d={`M250,180 Q${paths.buyerToMiddle.control.x},${paths.buyerToMiddle.control.y} ${paths.buyerToMiddle.end.x},${paths.buyerToMiddle.end.y}`}
            fill="none"
            stroke={pathColor}
            strokeWidth="3"
            strokeDasharray="8,8"
            opacity="0.8"
          />
          
          {/* Seller to Middle path */}
          <path
            d={`M250,435 Q${paths.sellerToMiddle.control.x},${paths.sellerToMiddle.control.y} ${paths.sellerToMiddle.end.x},${paths.sellerToMiddle.end.y}`}
            fill="none"
            stroke={pathColor}
            strokeWidth="3"
            strokeDasharray="8,8"
            opacity="0.8"
          />
          
          {/* Middle to Escrow */}
          <path
            d={`M${paths.middleToEscrow.start.x},${paths.middleToEscrow.start.y} L${paths.middleToEscrow.end.x},${paths.middleToEscrow.end.y}`}
            fill="none"
            stroke={pathColor}
            strokeWidth="3"
            strokeDasharray="8,8"
            opacity="0.8"
          />
          
          {/* Escrow to Display path */}
          <path
            d={`M${paths.escrowToDisplay.start.x},${paths.escrowToDisplay.start.y} L${paths.escrowToDisplay.end.x},${paths.escrowToDisplay.end.y}`}
            fill="none"
            stroke={pathColor}
            strokeWidth="3"
            strokeDasharray="8,8"
            opacity="0.8"
          />

          {/* Stage Display Box - Light peach color */}
          <rect x="800" y="50" width="350" height="500" rx="10" fill={displayBoxColor} stroke="#FF8A65" strokeWidth="2" />
          
          {/* Moving Buyer Tube Animation */}
          {buyerTubePoints.length > 0 && 
            buyerTubePoints.map((point, index) => (
              <circle
                key={`buyer-tube-${index}`}
                cx={point.x}
                cy={point.y}
                r={15 - index * 2.5}
                fill={buyerTubeColor}
                opacity={1 - (index * 0.15)}
              />
            ))
          }
          
          {/* Moving Seller Tube Animation */}
          {sellerTubePoints.length > 0 && 
            sellerTubePoints.map((point, index) => (
              <circle
                key={`seller-tube-${index}`}
                cx={point.x}
                cy={point.y}
                r={15 - index * 2.5}
                fill={sellerTubeColor}
                opacity={1 - (index * 0.15)}
              />
            ))
          }

          {/* Buyer - Circle Image Holder */}
          <circle cx="135" cy="180" r="75" fill="#FFEEDD" stroke="#FF8A65" strokeWidth="3" />
          <clipPath id="buyerClip">
            <circle cx="135" cy="180" r="70" />
          </clipPath>
          <image 
            x="65" 
            y="110" 
            width="140" 
            height="140" 
            href={buyerImage} 
            clipPath="url(#buyerClip)" 
          />
          {/* Buyer label */}
          <text x="135" y="285" textAnchor="middle" fontSize="24" fill="#444444" fontWeight="bold">Buyer</text>

          {/* Seller - Circle Image Holder */}
          <circle cx="135" cy="435" r="75" fill="#FFEEDD" stroke="#FF8A65" strokeWidth="3" />
          <clipPath id="sellerClip">
            <circle cx="135" cy="435" r="70" />
          </clipPath>
          <image 
            x="65" 
            y="365" 
            width="140" 
            height="140" 
            href={sellerImage} 
            clipPath="url(#sellerClip)" 
          />
          {/* Seller label */}
          <text x="135" y="540" textAnchor="middle" fontSize="24" fill="#444444" fontWeight="bold">Seller</text>

          {/* Escrow - Circle Image Holder */}
          <circle cx="675" cy="300" r="60" fill="#FFEEDD" stroke="#FF8A65" strokeWidth="3" />
          <clipPath id="escrowClip">
            <circle cx="675" cy="300" r="55" />
          </clipPath>
          <image 
            x="620" 
            y="245" 
            width="110" 
            height="110" 
            href={escrowImage} 
            clipPath="url(#escrowClip)" 
          />
          
          {/* Step Text - Bold and beautiful color */}
          {showStepText && (
            <>
              <text 
                x="975" 
                y="120" 
                textAnchor="middle" 
                fontSize="32" 
                fontWeight="bold" 
                fill="#FF5722" // Bold orange
              >
                {currentStage.step}
              </text>
              <text 
                x="975" 
                y="160" 
                textAnchor="middle" 
                fontSize="24" 
                fontWeight="500"
                fill="#444444" // Dark gray
              >
                {currentStage.text}
              </text>
            </>
          )}
          
          {/* Stage Image - Using a circle container */}
          {showImage && (
            <g>
              <circle
                cx="975" 
                cy="330" 
                r="150"
                fill="#FFFFFF" 
                stroke="#DDDDDD" 
                strokeWidth="2" 
              />
              <clipPath id="stageImageClip">
                <circle cx="975" cy="330" r="145" />
              </clipPath>
              <image 
                x="830" 
                y="185" 
                width="290" 
                height="290" 
                href={stageImages[transactionStep]} 
                clipPath="url(#stageImageClip)"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          )}
        </svg>
      </div>
      
      {/* Mobile-friendly legend for small screens */}
      <div className="md:hidden p-4 bg-white rounded-lg shadow-md m-4">
        <h3 className="text-lg font-bold text-center mb-2">Transaction Flow</h3>
        <div className="grid grid-cols-2 gap-2">
          {transactionStages.map((stage) => (
            <div key={stage.id} className="flex items-center p-2 border-b">
              <div 
                className={`w-4 h-4 rounded-full mr-2 ${transactionStep === stage.id ? 'bg-orange-500' : 'bg-gray-300'}`}
              />
              <p className="text-sm">{stage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EscrowAnimation;