
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

export default function Settings() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="erp-page-title">Configurações</h1>

        <Tabs defaultValue="company">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="company">Empresa</TabsTrigger>
            <TabsTrigger value="fiscal">Fiscal</TabsTrigger>
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
