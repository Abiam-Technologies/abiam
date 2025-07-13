import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    subtitle: string;
    emoji: string;
    purpose: string;
    description?: string;
    industry: string;
    useCase: string;
    features: string[];
    targetUsers: string;
    gradient: string;
    textColor?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header with gradient background */}
          <div className={`rounded-lg p-6 ${product.gradient}`}>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {product.industry}
                </Badge>
                <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                  {product.useCase}
                </Badge>
              </div>
              <div>
                <DialogTitle className={`text-3xl font-bold ${product.textColor || 'text-white'} mb-2`}>
                  {product.name}
                </DialogTitle>
                <p className={`text-lg ${product.textColor || 'text-white'}/90`}>
                  {product.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">About This Product</h3>
            <p className="text-muted-foreground leading-relaxed">
              {product.description || product.purpose}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Users */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Target Users</h3>
            <p className="text-muted-foreground">
              {product.targetUsers}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="flex-1 bg-primary-gradient hover:opacity-90">
              <ExternalLink className="w-4 h-4 mr-2" />
              Request Demo
            </Button>
            <Button variant="outline" className="flex-1">
              Get Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;