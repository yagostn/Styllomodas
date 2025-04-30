import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { formatCurrency } from '../utils/formatters';

interface CheckoutForm {
  nome: string;
  cidade: string;
  endereco: string;
  formaPagamento: 'credito' | 'debito' | 'pix' | 'dinheiro';
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { items, getTotal, getProductDetails, clearCart } = useCartStore();
  
  const [form, setForm] = useState<CheckoutForm>({
    nome: '',
    cidade: '',
    endereco: '',
    formaPagamento: 'credito',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutForm, string>>>({});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof CheckoutForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CheckoutForm, string>> = {};
    
    if (!form.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!form.cidade.trim()) newErrors.cidade = 'Cidade é obrigatória';
    if (!form.endereco.trim()) newErrors.endereco = 'Endereço é obrigatório';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const orderItems = items.map(item => {
      const product = getProductDetails(item.productId);
      return product 
        ? `- ${product.name} (${item.quantity}x) ${item.color ? `Cor: ${item.color}` : ''} ${item.size ? `Tamanho: ${item.size}` : ''} - ${formatCurrency(product.price * item.quantity)}`
        : '';
    }).join('\n');
    
    const paymentMethodText = {
      credito: 'Cartão de Crédito',
      debito: 'Cartão de Débito',
      pix: 'PIX',
      dinheiro: 'Dinheiro',
    }[form.formaPagamento];
  
    //Mensagem do pedido
    // Formatação da mensagem para o WhatsApp  
    const orderDetails = `
*Novo Pedido*
------------------------
*Itens:*
${orderItems}

*Total:* ${formatCurrency(getTotal())}
*Forma de Pagamento:* ${paymentMethodText}
------------------------
*Dados do Cliente:*
Nome: ${form.nome}
Cidade: ${form.cidade}
Endereço: ${form.endereco}
    `;
    
    const encodedMessage = encodeURIComponent(orderDetails);
    const whatsappNumber = '5579998992944'; 
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    clearCart();
    window.open(whatsappUrl, '_blank');
    navigate('/');
  };
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom max-w-5xl">
        <h1 className="text-3xl font-bold mb-8">Finalizar Compra</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Formulário de checkout */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Informações de Entrega</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      className={`input ${errors.nome ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                      value={form.nome}
                      onChange={handleInputChange}
                    />
                    {errors.nome && (
                      <p className="mt-1 text-sm text-error-600">{errors.nome}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
                      Cidade
                    </label>
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      className={`input ${errors.cidade ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                      value={form.cidade}
                      onChange={handleInputChange}
                    />
                    {errors.cidade && (
                      <p className="mt-1 text-sm text-error-600">{errors.cidade}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">
                      Endereço
                    </label>
                    <input
                      type="text"
                      id="endereco"
                      name="endereco"
                      className={`input ${errors.endereco ? 'border-error-500 focus:ring-error-500 focus:border-error-500' : ''}`}
                      value={form.endereco}
                      onChange={handleInputChange}
                    />
                    {errors.endereco && (
                      <p className="mt-1 text-sm text-error-600">{errors.endereco}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">Forma de Pagamento</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`
                      border rounded-lg p-4 flex items-center cursor-pointer
                      ${form.formaPagamento === 'credito' ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}
                    `}>
                      <input
                        type="radio"
                        name="formaPagamento"
                        value="credito"
                        className="sr-only"
                        checked={form.formaPagamento === 'credito'}
                        onChange={handleInputChange}
                      />
                      <span className="text-xl mr-3">💳</span>
                      <span>Cartão de Crédito</span>
                    </label>
                    
                    <label className={`
                      border rounded-lg p-4 flex items-center cursor-pointer
                      ${form.formaPagamento === 'debito' ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}
                    `}>
                      <input
                        type="radio"
                        name="formaPagamento"
                        value="debito"
                        className="sr-only"
                        checked={form.formaPagamento === 'debito'}
                        onChange={handleInputChange}
                      />
                      <span className="text-xl mr-3">💳</span>
                      <span>Cartão de Débito</span>
                    </label>
                    
                    <label className={`
                      border rounded-lg p-4 flex items-center cursor-pointer
                      ${form.formaPagamento === 'pix' ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}
                    `}>
                      <input
                        type="radio"
                        name="formaPagamento"
                        value="pix"
                        className="sr-only"
                        checked={form.formaPagamento === 'pix'}
                        onChange={handleInputChange}
                      />
                      <span className="text-xl mr-3">📱</span>
                      <span>PIX</span>
                    </label>
                    
                    <label className={`
                      border rounded-lg p-4 flex items-center cursor-pointer
                      ${form.formaPagamento === 'dinheiro' ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}
                    `}>
                      <input
                        type="radio"
                        name="formaPagamento"
                        value="dinheiro"
                        className="sr-only"
                        checked={form.formaPagamento === 'dinheiro'}
                        onChange={handleInputChange}
                      />
                      <span className="text-xl mr-3">💵</span>
                      <span>Dinheiro</span>
                    </label>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 mb-6">
                    Ao finalizar sua compra, você será redirecionado para o WhatsApp para confirmar seu pedido.
                  </p>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Finalizar Pedido via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Resumo do pedido */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              
              <div className="max-h-80 overflow-y-auto mb-4">
                {items.map(item => {
                  const product = getProductDetails(item.productId);
                  if (!product) return null;
                  
                  return (
                    <div key={item.productId} className="flex py-3 border-b border-gray-200 last:border-0">
                      <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-3">
                        <h4 className="font-medium text-sm">{product.name}</h4>
                        <p className="text-gray-600 text-xs">
                          Qtd: {item.quantity} {item.size && `• Tamanho: ${item.size}`} {item.color && `• ${item.color}`}
                        </p>
                        <p className="font-medium text-sm mt-1">
                          {formatCurrency(product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{formatCurrency(getTotal())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span>A calcular</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">{formatCurrency(getTotal())}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;