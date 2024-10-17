| **ID** | **Heurística**                          | **Descrição**                                                                                                                                                                                                                                                                                                                                                                    |
|:------:|:---------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| **1**  | Controle e liberdade do usuário         | Os usuários devem ter controle sobre as ações do sistema e a liberdade de desfazer operações ou refazer uma ação facilmente                                                                                                                                                                                                                                                      |
| **2**  | Consistência e padrões                  | O comportamento de ser automaticamente logado ao criar uma conta                                                                                                                                                                                                                                                                                                                 |
| **3**  | Minimizar a carga de memória do usuário | Fazer o usuário criar a conta e, em seguida, solicitar que ele faça o login aumenta a carga de memória ao obrigar o usuário a lembrar da senha criada imediatamente após o cadastro                                                                                                                                                                                              |
| **4**  | Eficiência e flexibilidade de uso       | Quando o usuário adiciona um novo contato, ele espera ser redirecionado automaticamente para a tela onde pode visualizar o contato adicionado, pois isso facilita o fluxo de trabalho e diminui etapas desnecessárias. No entanto, ao não ser levado diretamente à tela de contatos, o sistema obriga o usuário a realizar mais ações manuais, o que torna o uso menos eficiente |
| **5**  | Ajuda e documentação                    | Não há suporte ao usuário                                                                                                                                                                                                                                                                                                                                                        |


| **Heurísticas Violadas**                    | **Quantidade** |
|:-------------------------------------------:|:--------------:|
| **Controle e liberdade do usuário**         | 2              |
| **Consistência e padrões**                  | 3              |
| **Minimizar a carga de memória do usuário** | 3              |
| **Eficiência e flexibilidade de uso**       | 1              |
| **Ajuda e documentação**                    | 1              |


| **Severidade**         | **Quantidade** |
|:----------------------:|:--------------:|
| **0 - Falso-Positivo** | 0              |
| **1 - Cosmético**      | 0              |
| **2 - Leve**           | 1              |
| **3 - Grande**         | 4              |
