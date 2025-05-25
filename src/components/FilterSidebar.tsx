import React, { useState, useEffect } from "react";
import { ProductFilter } from "../types";
import { X, Filter } from "lucide-react";
import { useSearchParams } from "react-router-dom";

interface FilterSidebarProps {
  filter: ProductFilter;
  onChange: (filter: ProductFilter) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filter,
  onChange,
  isOpen,
  onClose,
}) => {
  const [localFilter, setLocalFilter] = useState<ProductFilter>(filter);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const handleFilterChange = (newFilter: Partial<ProductFilter>) => {
    const updatedFilter = { ...localFilter, ...newFilter };
    setLocalFilter(updatedFilter);
  };

  const applyFilters = () => {
    onChange(localFilter);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const resetFilters = () => {
    const resetFilter: ProductFilter = {
      searchQuery: searchParams.get("search") || undefined,
    };
    setLocalFilter(resetFilter);
    onChange(resetFilter);
  };

  return (
    <>
      {/* Sobreposição de filtro móvel */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Barra lateral de filtro*/}
      <div
        className={`
        fixed lg:sticky top-0 lg:top-24 h-full lg:h-auto z-50 lg:z-auto
        transform transition-transform duration-300 ease-in-out
        bg-white lg:bg-transparent shadow-lg lg:shadow-none
        w-80 max-w-full overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Filtros</h3>
            <button
              onClick={onClose}
              className="lg:hidden"
              aria-label="Fechar filtros"
            >
              <X size={20} />
            </button>
          </div>

          {/* Filtro de faixa de preço */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Faixa de preço</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Mínimo
                </label>
                <input
                  type="number"
                  className="input"
                  placeholder="0"
                  value={localFilter.minPrice || ""}
                  onChange={(e) =>
                    handleFilterChange({
                      minPrice: e.target.value
                        ? Number(e.target.value)
                        : undefined,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Máximo
                </label>
                <input
                  type="number"
                  className="input"
                  placeholder="1000"
                  value={localFilter.maxPrice || ""}
                  onChange={(e) =>
                    handleFilterChange({
                      maxPrice: e.target.value
                        ? Number(e.target.value)
                        : undefined,
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Filtro de gênero */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Gênero</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.gender?.includes("masculino") || false}
                  onChange={(e) => {
                    const genders = localFilter.gender || [];
                    const newGenders = e.target.checked
                      ? ([...genders, "masculino"] as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[])
                      : (genders.filter((g) => g !== "masculino") as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[]);
                    handleFilterChange({
                      gender: newGenders.length ? newGenders : undefined,
                    });
                  }}
                />
                <span>Masculino</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.gender?.includes("feminino") || false}
                  onChange={(e) => {
                    const genders = localFilter.gender || [];
                    const newGenders = e.target.checked
                      ? ([...genders, "feminino"] as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[])
                      : (genders.filter((g) => g !== "feminino") as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[]);
                    handleFilterChange({
                      gender: newGenders.length ? newGenders : undefined,
                    });
                  }}
                />
                <span>Feminino</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.gender?.includes("unisex") || false}
                  onChange={(e) => {
                    const genders = localFilter.gender || [];
                    const newGenders = e.target.checked
                      ? ([...genders, "unisex"] as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[])
                      : (genders.filter((g) => g !== "unisex") as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[]);
                    handleFilterChange({
                      gender: newGenders.length ? newGenders : undefined,
                    });
                  }}
                />
                <span>Unisex</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.gender?.includes("infantil") || false}
                  onChange={(e) => {
                    const genders = localFilter.gender || [];
                    const newGenders = e.target.checked
                      ? ([...genders, "infantil"] as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[])
                      : (genders.filter((g) => g !== "infantil") as (
                          | "masculino"
                          | "feminino"
                          | "infantil"
                          | "unisex"
                        )[]);
                    handleFilterChange({
                      gender: newGenders.length ? newGenders : undefined,
                    });
                  }}
                />
                <span>Infantil</span>
              </label>
            </div>
          </div>

          {/* Filtro de categoria */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Categoria</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.category?.includes("roupas") || false}
                  onChange={(e) => {
                    const categories = localFilter.category || [];
                    const newCategories = e.target.checked
                      ? ([...categories, "roupas"] as (
                          | "roupas"
                          | "acessórios"
                          | "calçados"
                        )[])
                      : (categories.filter((c) => c !== "roupas") as (
                          | "roupas"
                          | "acessórios"
                          | "calçados"
                        )[]);
                    handleFilterChange({
                      category: newCategories.length
                        ? newCategories
                        : undefined,
                    });
                  }}
                />
                <span>Roupas</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={
                    localFilter.category?.includes("acessórios") || false
                  }
                  onChange={(e) => {
                    const categories = localFilter.category || [];
                    const newCategories = e.target.checked
                      ? ([...categories, "acessórios"] as (
                          | "roupas"
                          | "acessórios"
                          | "calçados"
                        )[])
                      : (categories.filter((c) => c !== "acessórios") as (
                          | "roupas"
                          | "acessórios"
                          | "calçados"
                        )[]);
                    handleFilterChange({
                      category: newCategories.length
                        ? newCategories
                        : undefined,
                    });
                  }}
                />
                <span>Acessórios</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.category?.includes("calçados") || false}
                  onChange={(e) => {
                    const categories = localFilter.category || [];
                    const newCategories = e.target.checked
                      ? ([...categories, "calçados"] as (
                          | "roupas"
                          | "acessórios"
                          | "calçados"
                        )[])
                      : (categories.filter((c) => c !== "calçados") as (
                          | "roupas"
                          | "acessórios"
                          | "calçados"
                        )[]);
                    handleFilterChange({
                      category: newCategories.length
                        ? newCategories
                        : undefined,
                    });
                  }}
                />
                <span>Calçados</span>
              </label>
            </div>
          </div>

          {/* Filtro de disponibilidade */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Disponibilidade</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.inStock || false}
                  onChange={(e) =>
                    handleFilterChange({
                      inStock: e.target.checked || undefined,
                    })
                  }
                />
                <span>Somente em estoque</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  checked={localFilter.newArrivals || false}
                  onChange={(e) =>
                    handleFilterChange({
                      newArrivals: e.target.checked || undefined,
                    })
                  }
                />
                <span>Novidades</span>
              </label>
            </div>
          </div>

          {/*Botões de ação */}
          <div className="flex flex-col space-y-3">
            <button onClick={applyFilters} className="btn-primary w-full">
              Aplicar Filtros
            </button>
            <button onClick={resetFilters} className="btn-outline w-full">
              Redefinir filtros
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
