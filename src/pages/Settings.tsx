import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CompanySelector, Company } from "@/components/companies/CompanySelector";

// Mock company data
const mockCompanies: Company[] = [
  {
    id: "1",
    name: "Empresa Demo",
    cnpj: "00.000.000/0001-00",
    isActive: true,
  },
  {
    id: "2",
    name: "Filial 1",
    cnpj: "00.000.000/0002-00",
    isActive: true,
  },
  {
    id: "3",
    name: "Loja Virtual",
    cnpj: "00.000.000/0003-00",
    isActive: false,
  },
];

export default function Settings() {
  const [selectedCompany, setSelectedCompany] = useState<Company>(mockCompanies[0]);

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="erp-page-title">Configurações</h1>

        <div className="mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Empresa Ativa</CardTitle>
              <CardDescription>Selecione a empresa para configurar</CardDescription>
            </CardHeader>
            <CardContent>
              <CompanySelector 
                companies={mockCompanies} 
                selectedCompany={selectedCompany} 
                onCompanyChange={setSelectedCompany} 
              />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="company">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="company">Empresa</TabsTrigger>
            <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
            <TabsTrigger value="pdv">PDV</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="system">Sistema</TabsTrigger>
          </TabsList>
          
          <TabsContent value="company" className="space-y-4 py-4">
            <Card>
              <CardHeader>
                <CardTitle>Dados da Empresa</CardTitle>
                <CardDescription>
                  Configure as informações da sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nome da Empresa</Label>
                    <Input id="companyName" placeholder="Nome da Empresa" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tradeName">Nome Fantasia</Label>
                    <Input id="tradeName" placeholder="Nome Fantasia" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" placeholder="00.000.000/0000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ie">Inscrição Estadual</Label>
                    <Input id="ie" placeholder="Inscrição Estadual" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input id="address" placeholder="Endereço" />
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="Cidade" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Select>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="UF" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sp">SP</SelectItem>
                        <SelectItem value="rj">RJ</SelectItem>
                        <SelectItem value="mg">MG</SelectItem>
                        <SelectItem value="es">ES</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">CEP</Label>
                    <Input id="zip" placeholder="00000-000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 0000-0000" />
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Salvar Alterações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fiscal" className="space-y-4 py-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Fiscais</CardTitle>
                <CardDescription>
                  Configure os parâmetros fiscais da empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fiscalRegime">Regime Tributário</Label>
                    <Select>
                      <SelectTrigger id="fiscalRegime">
                        <SelectValue placeholder="Selecione o regime" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="simples">Simples Nacional</SelectItem>
                        <SelectItem value="real">Lucro Real</SelectItem>
                        <SelectItem value="presumido">Lucro Presumido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nfce" />
                      <Label htmlFor="nfce">Emite NFC-e</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nfe" />
                      <Label htmlFor="nfe">Emite NF-e</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="certificateType">Tipo de Certificado</Label>
                    <Select>
                      <SelectTrigger id="certificateType">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a1">A1</SelectItem>
                        <SelectItem value="a3">A3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="certificateFile">Arquivo do Certificado</Label>
                    <Input id="certificateFile" type="file" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="certificatePassword">Senha do Certificado</Label>
                    <Input id="certificatePassword" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="mdfe" />
                      <Label htmlFor="mdfe">Emite MDF-e</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cte" />
                      <Label htmlFor="cte">Emite CT-e</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cteos" />
                      <Label htmlFor="cteos">Emite CT-e OS</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sat" />
                      <Label htmlFor="sat">Utiliza SAT</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ibptTable">Tabela IBPT</Label>
                    <Input id="ibptTable" type="file" />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Salvar Configurações</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pdv" className="space-y-4 py-4">
            <Card>
              <CardHeader>
                <CardTitle>Configuração do PDV</CardTitle>
                <CardDescription>
                  Configure os parâmetros do Ponto de Venda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="posType">Tipo de PDV</Label>
                    <Select>
                      <SelectTrigger id="posType">
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nfce">NFC-e</SelectItem>
                        <SelectItem value="sat">SAT</SelectItem>
                        <SelectItem value="nonfiscal">Não Fiscal (MEI)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="printer">Impressora</Label>
                    <Select>
                      <SelectTrigger id="printer">
                        <SelectValue placeholder="Selecione a impressora" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="epson">Epson TM-T20</SelectItem>
                        <SelectItem value="bematech">Bematech MP-4200</SelectItem>
                        <SelectItem value="daruma">Daruma DR800</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="useScale" />
                      <Label htmlFor="useScale">Utiliza Balança</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="scaleModel">Modelo da Balança</Label>
                    <Select>
                      <SelectTrigger id="scaleModel">
                        <SelectValue placeholder="Selecione o modelo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toledo">Toledo Prix 3</SelectItem>
                        <SelectItem value="filizola">Filizola MF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="scalePort">Porta da Balança</Label>
                    <Input id="scalePort" placeholder="COM1" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="useTef" />
                      <Label htmlFor="useTef">Utiliza TEF</Label>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Salvar Configurações</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="users" className="space-y-4 py-4">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciamento de Usuários</CardTitle>
                <CardDescription>
                  Configure os usuários e suas permissões
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Usuários do sistema e permissões de acesso</p>
                <Button>Adicionar Novo Usuário</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="system" className="space-y-4 py-4">
            <Card>
              <CardHeader>
                <CardTitle>Configurações do Sistema</CardTitle>
                <CardDescription>
                  Configure as preferências gerais do sistema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="autoBackup" />
                      <Label htmlFor="autoBackup">Backup Automático</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="backupTime">Horário do Backup</Label>
                    <Input id="backupTime" type="time" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="backupLocation">Local do Backup</Label>
                    <Input id="backupLocation" placeholder="/backups" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="darkMode" />
                      <Label htmlFor="darkMode">Modo Escuro</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enableWhatsApp" />
                      <Label htmlFor="enableWhatsApp">Integração com WhatsApp</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="whatsappNumber">Número do WhatsApp</Label>
                    <Input id="whatsappNumber" placeholder="55999999999" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="autoStartWhatsApp" />
                      <Label htmlFor="autoStartWhatsApp">Iniciar WhatsApp automaticamente</Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="remoteBackupLocation">Backup em Nuvem</Label>
                    <Input id="remoteBackupLocation" placeholder="https://backup.example.com" />
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Salvar Configurações</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
