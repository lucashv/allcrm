<?php
return [
    'router' => [
        'routes' => [
            'crm.rest.agenda-usuario' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/agenda_usuario[/:agenda_usuario_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\AgendaUsuario\\Controller',
                    ],
                ],
            ],
            'crm.rest.campanhas' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/campanhas[/:campanhas_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Campanhas\\Controller',
                    ],
                ],
            ],
            'crm.rest.autorizacao-reposicao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/autorizacao_reposicao[/:autorizacao_reposicao_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\AutorizacaoReposicao\\Controller',
                    ],
                ],
            ],
            'crm.rest.arquivo-upload' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/arquivo_upload[/:arquivo_upload_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\ArquivoUpload\\Controller',
                    ],
                ],
            ],
            'crm.rest.chamado' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/chamado[/:chamado_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Chamado\\Controller',
                    ],
                ],
            ],
            'crm.rest.categoria-chamado' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/categoria_chamado[/:categoria_chamado_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\CategoriaChamado\\Controller',
                    ],
                ],
            ],
            'crm.rest.cidades' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/cidades[/:cidades_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Cidades\\Controller',
                    ],
                ],
            ],
            'crm.rest.contato-corretor-bloqueio' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/contato_corretor_bloqueio[/:contato_corretor_bloqueio_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Controller',
                    ],
                ],
            ],
            'crm.rest.contatos' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/contatos[/:contatos_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Contatos\\Controller',
                    ],
                ],
            ],
            'crm.rest.contatos-produtos' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/contatos_produtos[/:contatos_produtos_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\ContatosProdutos\\Controller',
                    ],
                ],
            ],
            'crm.rest.cron-tarefas-agendadas' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/cron_tarefas_agendadas[/:cron_tarefas_agendadas_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\CronTarefasAgendadas\\Controller',
                    ],
                ],
            ],
            'crm.rest.emails-contato' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/emails_contato[/:emails_contato_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\EmailsContato\\Controller',
                    ],
                ],
            ],
            'crm.rest.empresas' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/empresas[/:empresas_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Empresas\\Controller',
                    ],
                ],
            ],
            'crm.rest.estados' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/estados[/:estados_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Estados\\Controller',
                    ],
                ],
            ],
            'crm.rest.fila-chamado' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/fila_chamado[/:fila_chamado_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\FilaChamado\\Controller',
                    ],
                ],
            ],
            'crm.rest.filiais' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/filiais[/:filiais_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Filiais\\Controller',
                    ],
                ],
            ],
            'crm.rest.fornecedores' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/fornecedores[/:fornecedores_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Fornecedores\\Controller',
                    ],
                ],
            ],
            'crm.rest.grupo-vendas' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/grupo_vendas[/:grupo_vendas_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\GrupoVendas\\Controller',
                    ],
                ],
            ],
            'crm.rest.interacao-chamado' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/interacao_chamado[/:interacao_chamado_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\InteracaoChamado\\Controller',
                    ],
                ],
            ],
            'crm.rest.interacoes-contato' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/interacoes_contato[/:interacoes_contato_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\InteracoesContato\\Controller',
                    ],
                ],
            ],
            'crm.rest.interacoes-origem' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/interacoes_origem[/:interacoes_origem_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\InteracoesOrigem\\Controller',
                    ],
                ],
            ],
            'crm.rest.ligacoes-informacao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/ligacoes_informacao[/:ligacoes_informacao_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\LigacoesInformacao\\Controller',
                    ],
                ],
            ],
            'crm.rest.log-desbloqueio-usuario' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/log_desbloqueio_usuario[/:log_desbloqueio_usuario_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Controller',
                    ],
                ],
            ],
            'crm.rest.logs' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/logs[/:logs_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Logs\\Controller',
                    ],
                ],
            ],
            'crm.rest.logs-contato' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/logs_contato[/:logs_contato_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\LogsContato\\Controller',
                    ],
                ],
            ],
            'crm.rest.modulos' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/modulos[/:modulos_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Modulos\\Controller',
                    ],
                ],
            ],
            'crm.rest.modulos-permissoes' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/modulos_permissoes[/:modulos_permissoes_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\ModulosPermissoes\\Controller',
                    ],
                ],
            ],
            'crm.rest.operadoras' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/operadoras[/:operadoras_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Operadoras\\Controller',
                    ],
                ],
            ],
            'crm.rest.operadoras-produtos' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/operadoras_produtos[/:operadoras_produtos_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\OperadorasProdutos\\Controller',
                    ],
                ],
            ],
            'crm.rest.operadoras-telefones' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/operadoras_telefones[/:operadoras_telefones_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\OperadorasTelefones\\Controller',
                    ],
                ],
            ],
            'crm.rest.outras-origens-interacoes' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/outras_origens_interacoes[/:outras_origens_interacoes_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Controller',
                    ],
                ],
            ],
            'crm.rest.perfil' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/perfil[/:perfil_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Perfil\\Controller',
                    ],
                ],
            ],
            'crm.rest.plantoes' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/plantoes[/:plantoes_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Plantoes\\Controller',
                    ],
                ],
            ],
            'crm.rest.pre-cadastro' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/pre_cadastro[/:pre_cadastro_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\PreCadastro\\Controller',
                    ],
                ],
            ],
            'crm.rest.produtos' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/produtos[/:produtos_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Produtos\\Controller',
                    ],
                ],
            ],
            'crm.rest.produtos-categorias' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/produtos_categorias[/:produtos_categorias_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\ProdutosCategorias\\Controller',
                    ],
                ],
            ],
            'crm.rest.proposta-usuario' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/proposta_usuario[/:proposta_usuario_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\PropostaUsuario\\Controller',
                    ],
                ],
            ],
            'crm.rest.propostas' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/propostas[/:propostas_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Propostas\\Controller',
                    ],
                ],
            ],
            'crm.rest.quantidade-propostas-usuario' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/quantidade_propostas_usuario[/:quantidade_propostas_usuario_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipo-proposta-operadora' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipo_proposta_operadora[/:tipo_proposta_operadora_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TipoPropostaOperadora\\Controller',
                    ],
                ],
            ],
            'crm.rest.situacoes-interacoes' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/situacoes_interacoes[/:situacoes_interacoes_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\SituacoesInteracoes\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipos-ligacoes' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipos_ligacoes[/:tipos_ligacoes_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TiposLigacoes\\Controller',
                    ],
                ],
            ],
            'crm.rest.subcategoria-produto' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/subcategoria_produto[/:subcategoria_produto_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\SubcategoriaProduto\\Controller',
                    ],
                ],
            ],
            'crm.rest.situacao-proposta' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/situacao_proposta[/:situacao_proposta_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\SituacaoProposta\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipos-envios' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipos_envios[/:tipos_envios_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TiposEnvios\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipos-produtos' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipos_produtos[/:tipos_produtos_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TiposProdutos\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipos-operadora' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipos_operadora[/:tipos_operadora_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TiposOperadora\\Controller',
                    ],
                ],
            ],
            'crm.rest.solicitacao-reposicao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/solicitacao_reposicao[/:solicitacao_reposicao_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\SolicitacaoReposicao\\Controller',
                    ],
                ],
            ],
            'crm.rest.regras-bloqueio' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/regras_bloqueio[/:regras_bloqueio_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\RegrasBloqueio\\Controller',
                    ],
                ],
            ],
            'crm.rest.usuarios' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/usuarios[/:usuarios_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Usuarios\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipos-fornecedores' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipos_fornecedores[/:tipos_fornecedores_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TiposFornecedores\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipos-plantoes' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipos_plantoes[/:tipos_plantoes_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TiposPlantoes\\Controller',
                    ],
                ],
            ],
            'crm.rest.tipos-entrada' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/tipos_entrada[/:tipos_entrada_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TiposEntrada\\Controller',
                    ],
                ],
            ],
            'crm.rest.urls' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/urls[/:urls_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Urls\\Controller',
                    ],
                ],
            ],
            'crm.rest.teste-tiago' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/teste_tiago[/:teste_tiago_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TesteTiago\\Controller',
                    ],
                ],
            ],
            'crm.rest.sites' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/sites[/:sites_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Sites\\Controller',
                    ],
                ],
            ],
            'crm.rest.telefones-contato' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/telefones_contato[/:telefones_contato_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\TelefonesContato\\Controller',
                    ],
                ],
            ],
            'crm.rest.versao-itens' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/versao_itens[/:versao_itens_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\VersaoItens\\Controller',
                    ],
                ],
            ],
            'crm.rest.versao' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/versao[/:versao_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Versao\\Controller',
                    ],
                ],
            ],
            'crm.rest.status-chamado' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/status_chamado[/:status_chamado_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\StatusChamado\\Controller',
                    ],
                ],
            ],
            'crm.rest.sprint' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/sprint[/:sprint_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Sprint\\Controller',
                    ],
                ],
            ],
            'crm.rest.venda-produto-contato' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/venda_produto_contato[/:venda_produto_contato_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\VendaProdutoContato\\Controller',
                    ],
                ],
            ],
            'crm.rest.gesto_nacional_dash_board' => [
                'type' => 'Segment',
                'options' => [
                    'route' => '/gesto_nacional_dash_board[/:gesto_nacional_dash_board_id]',
                    'defaults' => [
                        'controller' => 'CRM\\V1\\Rest\\Gesto_nacional_dash_board\\Controller',
                    ],
                ],
            ],
        ],
    ],
    'zf-versioning' => [
        'uri' => [
            0 => 'crm.rest.agenda-usuario',
            1 => 'crm.rest.campanhas',
            2 => 'crm.rest.autorizacao-reposicao',
            3 => 'crm.rest.arquivo-upload',
            4 => 'crm.rest.chamado',
            5 => 'crm.rest.categoria-chamado',
            6 => 'crm.rest.cidades',
            7 => 'crm.rest.contato-corretor-bloqueio',
            8 => 'crm.rest.contatos',
            9 => 'crm.rest.contatos-produtos',
            10 => 'crm.rest.cron-tarefas-agendadas',
            11 => 'crm.rest.emails-contato',
            12 => 'crm.rest.empresas',
            13 => 'crm.rest.estados',
            14 => 'crm.rest.fila-chamado',
            15 => 'crm.rest.filiais',
            16 => 'crm.rest.fornecedores',
            17 => 'crm.rest.grupo-vendas',
            18 => 'crm.rest.interacao-chamado',
            19 => 'crm.rest.interacoes-contato',
            20 => 'crm.rest.interacoes-origem',
            21 => 'crm.rest.ligacoes-informacao',
            22 => 'crm.rest.log-desbloqueio-usuario',
            23 => 'crm.rest.logs',
            24 => 'crm.rest.logs-contato',
            25 => 'crm.rest.modulos',
            26 => 'crm.rest.modulos-permissoes',
            27 => 'crm.rest.operadoras',
            28 => 'crm.rest.operadoras-produtos',
            29 => 'crm.rest.operadoras-telefones',
            30 => 'crm.rest.outras-origens-interacoes',
            31 => 'crm.rest.perfil',
            32 => 'crm.rest.plantoes',
            33 => 'crm.rest.pre-cadastro',
            34 => 'crm.rest.produtos',
            35 => 'crm.rest.produtos-categorias',
            36 => 'crm.rest.proposta-usuario',
            37 => 'crm.rest.propostas',
            38 => 'crm.rest.quantidade-propostas-usuario',
            39 => 'crm.rest.tipo-proposta-operadora',
            40 => 'crm.rest.situacoes-interacoes',
            41 => 'crm.rest.tipos-ligacoes',
            42 => 'crm.rest.subcategoria-produto',
            43 => 'crm.rest.situacao-proposta',
            44 => 'crm.rest.tipos-envios',
            45 => 'crm.rest.tipos-produtos',
            46 => 'crm.rest.tipos-operadora',
            47 => 'crm.rest.solicitacao-reposicao',
            48 => 'crm.rest.regras-bloqueio',
            49 => 'crm.rest.usuarios',
            50 => 'crm.rest.tipos-fornecedores',
            51 => 'crm.rest.tipos-plantoes',
            52 => 'crm.rest.tipos-entrada',
            53 => 'crm.rest.urls',
            54 => 'crm.rest.teste-tiago',
            55 => 'crm.rest.sites',
            56 => 'crm.rest.telefones-contato',
            57 => 'crm.rest.versao-itens',
            58 => 'crm.rest.versao',
            59 => 'crm.rest.status-chamado',
            60 => 'crm.rest.sprint',
            61 => 'crm.rest.venda-produto-contato',
            62 => 'crm.rest.gesto_nacional_dash_board',
        ],
    ],
    'zf-rest' => [
        'CRM\\V1\\Rest\\AgendaUsuario\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\AgendaUsuario\\AgendaUsuarioResource',
            'route_name' => 'crm.rest.agenda-usuario',
            'route_identifier_name' => 'agenda_usuario_id',
            'collection_name' => 'agenda_usuario',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\AgendaUsuario\AgendaUsuarioEntity::class,
            'collection_class' => \CRM\V1\Rest\AgendaUsuario\AgendaUsuarioCollection::class,
            'service_name' => 'agenda_usuario',
        ],
        'CRM\\V1\\Rest\\Campanhas\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Campanhas\\CampanhasResource',
            'route_name' => 'crm.rest.campanhas',
            'route_identifier_name' => 'campanhas_id',
            'collection_name' => 'campanhas',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Campanhas\CampanhasEntity::class,
            'collection_class' => \CRM\V1\Rest\Campanhas\CampanhasCollection::class,
            'service_name' => 'campanhas',
        ],
        'CRM\\V1\\Rest\\AutorizacaoReposicao\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\AutorizacaoReposicao\\AutorizacaoReposicaoResource',
            'route_name' => 'crm.rest.autorizacao-reposicao',
            'route_identifier_name' => 'autorizacao_reposicao_id',
            'collection_name' => 'autorizacao_reposicao',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\AutorizacaoReposicao\AutorizacaoReposicaoEntity::class,
            'collection_class' => \CRM\V1\Rest\AutorizacaoReposicao\AutorizacaoReposicaoCollection::class,
            'service_name' => 'autorizacao_reposicao',
        ],
        'CRM\\V1\\Rest\\ArquivoUpload\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\ArquivoUpload\\ArquivoUploadResource',
            'route_name' => 'crm.rest.arquivo-upload',
            'route_identifier_name' => 'arquivo_upload_id',
            'collection_name' => 'arquivo_upload',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\ArquivoUpload\ArquivoUploadEntity::class,
            'collection_class' => \CRM\V1\Rest\ArquivoUpload\ArquivoUploadCollection::class,
            'service_name' => 'arquivo_upload',
        ],
        'CRM\\V1\\Rest\\Chamado\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Chamado\\ChamadoResource',
            'route_name' => 'crm.rest.chamado',
            'route_identifier_name' => 'chamado_id',
            'collection_name' => 'chamado',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Chamado\ChamadoEntity::class,
            'collection_class' => \CRM\V1\Rest\Chamado\ChamadoCollection::class,
            'service_name' => 'chamado',
        ],
        'CRM\\V1\\Rest\\CategoriaChamado\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\CategoriaChamado\\CategoriaChamadoResource',
            'route_name' => 'crm.rest.categoria-chamado',
            'route_identifier_name' => 'categoria_chamado_id',
            'collection_name' => 'categoria_chamado',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\CategoriaChamado\CategoriaChamadoEntity::class,
            'collection_class' => \CRM\V1\Rest\CategoriaChamado\CategoriaChamadoCollection::class,
            'service_name' => 'categoria_chamado',
        ],
        'CRM\\V1\\Rest\\Cidades\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Cidades\\CidadesResource',
            'route_name' => 'crm.rest.cidades',
            'route_identifier_name' => 'cidades_id',
            'collection_name' => 'cidades',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Cidades\CidadesEntity::class,
            'collection_class' => \CRM\V1\Rest\Cidades\CidadesCollection::class,
            'service_name' => 'cidades',
        ],
        'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\ContatoCorretorBloqueioResource',
            'route_name' => 'crm.rest.contato-corretor-bloqueio',
            'route_identifier_name' => 'contato_corretor_bloqueio_id',
            'collection_name' => 'contato_corretor_bloqueio',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\ContatoCorretorBloqueio\ContatoCorretorBloqueioEntity::class,
            'collection_class' => \CRM\V1\Rest\ContatoCorretorBloqueio\ContatoCorretorBloqueioCollection::class,
            'service_name' => 'contato_corretor_bloqueio',
        ],
        'CRM\\V1\\Rest\\Contatos\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Contatos\\ContatosResource',
            'route_name' => 'crm.rest.contatos',
            'route_identifier_name' => 'contatos_id',
            'collection_name' => 'contatos',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Contatos\ContatosEntity::class,
            'collection_class' => \CRM\V1\Rest\Contatos\ContatosCollection::class,
            'service_name' => 'contatos',
        ],
        'CRM\\V1\\Rest\\ContatosProdutos\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\ContatosProdutos\\ContatosProdutosResource',
            'route_name' => 'crm.rest.contatos-produtos',
            'route_identifier_name' => 'contatos_produtos_id',
            'collection_name' => 'contatos_produtos',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\ContatosProdutos\ContatosProdutosEntity::class,
            'collection_class' => \CRM\V1\Rest\ContatosProdutos\ContatosProdutosCollection::class,
            'service_name' => 'contatos_produtos',
        ],
        'CRM\\V1\\Rest\\CronTarefasAgendadas\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\CronTarefasAgendadas\\CronTarefasAgendadasResource',
            'route_name' => 'crm.rest.cron-tarefas-agendadas',
            'route_identifier_name' => 'cron_tarefas_agendadas_id',
            'collection_name' => 'cron_tarefas_agendadas',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\CronTarefasAgendadas\CronTarefasAgendadasEntity::class,
            'collection_class' => \CRM\V1\Rest\CronTarefasAgendadas\CronTarefasAgendadasCollection::class,
            'service_name' => 'cron_tarefas_agendadas',
        ],
        'CRM\\V1\\Rest\\EmailsContato\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\EmailsContato\\EmailsContatoResource',
            'route_name' => 'crm.rest.emails-contato',
            'route_identifier_name' => 'emails_contato_id',
            'collection_name' => 'emails_contato',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\EmailsContato\EmailsContatoEntity::class,
            'collection_class' => \CRM\V1\Rest\EmailsContato\EmailsContatoCollection::class,
            'service_name' => 'emails_contato',
        ],
        'CRM\\V1\\Rest\\Empresas\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Empresas\\EmpresasResource',
            'route_name' => 'crm.rest.empresas',
            'route_identifier_name' => 'empresas_id',
            'collection_name' => 'empresas',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Empresas\EmpresasEntity::class,
            'collection_class' => \CRM\V1\Rest\Empresas\EmpresasCollection::class,
            'service_name' => 'empresas',
        ],
        'CRM\\V1\\Rest\\Estados\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Estados\\EstadosResource',
            'route_name' => 'crm.rest.estados',
            'route_identifier_name' => 'estados_id',
            'collection_name' => 'estados',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Estados\EstadosEntity::class,
            'collection_class' => \CRM\V1\Rest\Estados\EstadosCollection::class,
            'service_name' => 'estados',
        ],
        'CRM\\V1\\Rest\\FilaChamado\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\FilaChamado\\FilaChamadoResource',
            'route_name' => 'crm.rest.fila-chamado',
            'route_identifier_name' => 'fila_chamado_id',
            'collection_name' => 'fila_chamado',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\FilaChamado\FilaChamadoEntity::class,
            'collection_class' => \CRM\V1\Rest\FilaChamado\FilaChamadoCollection::class,
            'service_name' => 'fila_chamado',
        ],
        'CRM\\V1\\Rest\\Filiais\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Filiais\\FiliaisResource',
            'route_name' => 'crm.rest.filiais',
            'route_identifier_name' => 'filiais_id',
            'collection_name' => 'filiais',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Filiais\FiliaisEntity::class,
            'collection_class' => \CRM\V1\Rest\Filiais\FiliaisCollection::class,
            'service_name' => 'filiais',
        ],
        'CRM\\V1\\Rest\\Fornecedores\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Fornecedores\\FornecedoresResource',
            'route_name' => 'crm.rest.fornecedores',
            'route_identifier_name' => 'fornecedores_id',
            'collection_name' => 'fornecedores',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Fornecedores\FornecedoresEntity::class,
            'collection_class' => \CRM\V1\Rest\Fornecedores\FornecedoresCollection::class,
            'service_name' => 'fornecedores',
        ],
        'CRM\\V1\\Rest\\GrupoVendas\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\GrupoVendas\\GrupoVendasResource',
            'route_name' => 'crm.rest.grupo-vendas',
            'route_identifier_name' => 'grupo_vendas_id',
            'collection_name' => 'grupo_vendas',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\GrupoVendas\GrupoVendasEntity::class,
            'collection_class' => \CRM\V1\Rest\GrupoVendas\GrupoVendasCollection::class,
            'service_name' => 'grupo_vendas',
        ],
        'CRM\\V1\\Rest\\InteracaoChamado\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\InteracaoChamado\\InteracaoChamadoResource',
            'route_name' => 'crm.rest.interacao-chamado',
            'route_identifier_name' => 'interacao_chamado_id',
            'collection_name' => 'interacao_chamado',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\InteracaoChamado\InteracaoChamadoEntity::class,
            'collection_class' => \CRM\V1\Rest\InteracaoChamado\InteracaoChamadoCollection::class,
            'service_name' => 'interacao_chamado',
        ],
        'CRM\\V1\\Rest\\InteracoesContato\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\InteracoesContato\\InteracoesContatoResource',
            'route_name' => 'crm.rest.interacoes-contato',
            'route_identifier_name' => 'interacoes_contato_id',
            'collection_name' => 'interacoes_contato',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\InteracoesContato\InteracoesContatoEntity::class,
            'collection_class' => \CRM\V1\Rest\InteracoesContato\InteracoesContatoCollection::class,
            'service_name' => 'interacoes_contato',
        ],
        'CRM\\V1\\Rest\\InteracoesOrigem\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\InteracoesOrigem\\InteracoesOrigemResource',
            'route_name' => 'crm.rest.interacoes-origem',
            'route_identifier_name' => 'interacoes_origem_id',
            'collection_name' => 'interacoes_origem',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\InteracoesOrigem\InteracoesOrigemEntity::class,
            'collection_class' => \CRM\V1\Rest\InteracoesOrigem\InteracoesOrigemCollection::class,
            'service_name' => 'interacoes_origem',
        ],
        'CRM\\V1\\Rest\\LigacoesInformacao\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\LigacoesInformacao\\LigacoesInformacaoResource',
            'route_name' => 'crm.rest.ligacoes-informacao',
            'route_identifier_name' => 'ligacoes_informacao_id',
            'collection_name' => 'ligacoes_informacao',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\LigacoesInformacao\LigacoesInformacaoEntity::class,
            'collection_class' => \CRM\V1\Rest\LigacoesInformacao\LigacoesInformacaoCollection::class,
            'service_name' => 'ligacoes_informacao',
        ],
        'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\LogDesbloqueioUsuarioResource',
            'route_name' => 'crm.rest.log-desbloqueio-usuario',
            'route_identifier_name' => 'log_desbloqueio_usuario_id',
            'collection_name' => 'log_desbloqueio_usuario',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\LogDesbloqueioUsuario\LogDesbloqueioUsuarioEntity::class,
            'collection_class' => \CRM\V1\Rest\LogDesbloqueioUsuario\LogDesbloqueioUsuarioCollection::class,
            'service_name' => 'log_desbloqueio_usuario',
        ],
        'CRM\\V1\\Rest\\Logs\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Logs\\LogsResource',
            'route_name' => 'crm.rest.logs',
            'route_identifier_name' => 'logs_id',
            'collection_name' => 'logs',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Logs\LogsEntity::class,
            'collection_class' => \CRM\V1\Rest\Logs\LogsCollection::class,
            'service_name' => 'logs',
        ],
        'CRM\\V1\\Rest\\LogsContato\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\LogsContato\\LogsContatoResource',
            'route_name' => 'crm.rest.logs-contato',
            'route_identifier_name' => 'logs_contato_id',
            'collection_name' => 'logs_contato',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\LogsContato\LogsContatoEntity::class,
            'collection_class' => \CRM\V1\Rest\LogsContato\LogsContatoCollection::class,
            'service_name' => 'logs_contato',
        ],
        'CRM\\V1\\Rest\\Modulos\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Modulos\\ModulosResource',
            'route_name' => 'crm.rest.modulos',
            'route_identifier_name' => 'modulos_id',
            'collection_name' => 'modulos',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Modulos\ModulosEntity::class,
            'collection_class' => \CRM\V1\Rest\Modulos\ModulosCollection::class,
            'service_name' => 'modulos',
        ],
        'CRM\\V1\\Rest\\ModulosPermissoes\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\ModulosPermissoes\\ModulosPermissoesResource',
            'route_name' => 'crm.rest.modulos-permissoes',
            'route_identifier_name' => 'modulos_permissoes_id',
            'collection_name' => 'modulos_permissoes',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\ModulosPermissoes\ModulosPermissoesEntity::class,
            'collection_class' => \CRM\V1\Rest\ModulosPermissoes\ModulosPermissoesCollection::class,
            'service_name' => 'modulos_permissoes',
        ],
        'CRM\\V1\\Rest\\Operadoras\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Operadoras\\OperadorasResource',
            'route_name' => 'crm.rest.operadoras',
            'route_identifier_name' => 'operadoras_id',
            'collection_name' => 'operadoras',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Operadoras\OperadorasEntity::class,
            'collection_class' => \CRM\V1\Rest\Operadoras\OperadorasCollection::class,
            'service_name' => 'operadoras',
        ],
        'CRM\\V1\\Rest\\OperadorasProdutos\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\OperadorasProdutos\\OperadorasProdutosResource',
            'route_name' => 'crm.rest.operadoras-produtos',
            'route_identifier_name' => 'operadoras_produtos_id',
            'collection_name' => 'operadoras_produtos',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\OperadorasProdutos\OperadorasProdutosEntity::class,
            'collection_class' => \CRM\V1\Rest\OperadorasProdutos\OperadorasProdutosCollection::class,
            'service_name' => 'operadoras_produtos',
        ],
        'CRM\\V1\\Rest\\OperadorasTelefones\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\OperadorasTelefones\\OperadorasTelefonesResource',
            'route_name' => 'crm.rest.operadoras-telefones',
            'route_identifier_name' => 'operadoras_telefones_id',
            'collection_name' => 'operadoras_telefones',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\OperadorasTelefones\OperadorasTelefonesEntity::class,
            'collection_class' => \CRM\V1\Rest\OperadorasTelefones\OperadorasTelefonesCollection::class,
            'service_name' => 'operadoras_telefones',
        ],
        'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\OutrasOrigensInteracoesResource',
            'route_name' => 'crm.rest.outras-origens-interacoes',
            'route_identifier_name' => 'outras_origens_interacoes_id',
            'collection_name' => 'outras_origens_interacoes',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\OutrasOrigensInteracoes\OutrasOrigensInteracoesEntity::class,
            'collection_class' => \CRM\V1\Rest\OutrasOrigensInteracoes\OutrasOrigensInteracoesCollection::class,
            'service_name' => 'outras_origens_interacoes',
        ],
        'CRM\\V1\\Rest\\Perfil\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Perfil\\PerfilResource',
            'route_name' => 'crm.rest.perfil',
            'route_identifier_name' => 'perfil_id',
            'collection_name' => 'perfil',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Perfil\PerfilEntity::class,
            'collection_class' => \CRM\V1\Rest\Perfil\PerfilCollection::class,
            'service_name' => 'perfil',
        ],
        'CRM\\V1\\Rest\\Plantoes\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Plantoes\\PlantoesResource',
            'route_name' => 'crm.rest.plantoes',
            'route_identifier_name' => 'plantoes_id',
            'collection_name' => 'plantoes',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Plantoes\PlantoesEntity::class,
            'collection_class' => \CRM\V1\Rest\Plantoes\PlantoesCollection::class,
            'service_name' => 'plantoes',
        ],
        'CRM\\V1\\Rest\\PreCadastro\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\PreCadastro\\PreCadastroResource',
            'route_name' => 'crm.rest.pre-cadastro',
            'route_identifier_name' => 'pre_cadastro_id',
            'collection_name' => 'pre_cadastro',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\PreCadastro\PreCadastroEntity::class,
            'collection_class' => \CRM\V1\Rest\PreCadastro\PreCadastroCollection::class,
            'service_name' => 'pre_cadastro',
        ],
        'CRM\\V1\\Rest\\Produtos\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Produtos\\ProdutosResource',
            'route_name' => 'crm.rest.produtos',
            'route_identifier_name' => 'produtos_id',
            'collection_name' => 'produtos',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Produtos\ProdutosEntity::class,
            'collection_class' => \CRM\V1\Rest\Produtos\ProdutosCollection::class,
            'service_name' => 'produtos',
        ],
        'CRM\\V1\\Rest\\ProdutosCategorias\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\ProdutosCategorias\\ProdutosCategoriasResource',
            'route_name' => 'crm.rest.produtos-categorias',
            'route_identifier_name' => 'produtos_categorias_id',
            'collection_name' => 'produtos_categorias',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\ProdutosCategorias\ProdutosCategoriasEntity::class,
            'collection_class' => \CRM\V1\Rest\ProdutosCategorias\ProdutosCategoriasCollection::class,
            'service_name' => 'produtos_categorias',
        ],
        'CRM\\V1\\Rest\\PropostaUsuario\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\PropostaUsuario\\PropostaUsuarioResource',
            'route_name' => 'crm.rest.proposta-usuario',
            'route_identifier_name' => 'proposta_usuario_id',
            'collection_name' => 'proposta_usuario',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\PropostaUsuario\PropostaUsuarioEntity::class,
            'collection_class' => \CRM\V1\Rest\PropostaUsuario\PropostaUsuarioCollection::class,
            'service_name' => 'proposta_usuario',
        ],
        'CRM\\V1\\Rest\\Propostas\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Propostas\\PropostasResource',
            'route_name' => 'crm.rest.propostas',
            'route_identifier_name' => 'propostas_id',
            'collection_name' => 'propostas',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Propostas\PropostasEntity::class,
            'collection_class' => \CRM\V1\Rest\Propostas\PropostasCollection::class,
            'service_name' => 'propostas',
        ],
        'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\QuantidadePropostasUsuarioResource',
            'route_name' => 'crm.rest.quantidade-propostas-usuario',
            'route_identifier_name' => 'quantidade_propostas_usuario_id',
            'collection_name' => 'quantidade_propostas_usuario',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\QuantidadePropostasUsuario\QuantidadePropostasUsuarioEntity::class,
            'collection_class' => \CRM\V1\Rest\QuantidadePropostasUsuario\QuantidadePropostasUsuarioCollection::class,
            'service_name' => 'quantidade_propostas_usuario',
        ],
        'CRM\\V1\\Rest\\TipoPropostaOperadora\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TipoPropostaOperadora\\TipoPropostaOperadoraResource',
            'route_name' => 'crm.rest.tipo-proposta-operadora',
            'route_identifier_name' => 'tipo_proposta_operadora_id',
            'collection_name' => 'tipo_proposta_operadora',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TipoPropostaOperadora\TipoPropostaOperadoraEntity::class,
            'collection_class' => \CRM\V1\Rest\TipoPropostaOperadora\TipoPropostaOperadoraCollection::class,
            'service_name' => 'tipo_proposta_operadora',
        ],
        'CRM\\V1\\Rest\\SituacoesInteracoes\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\SituacoesInteracoes\\SituacoesInteracoesResource',
            'route_name' => 'crm.rest.situacoes-interacoes',
            'route_identifier_name' => 'situacoes_interacoes_id',
            'collection_name' => 'situacoes_interacoes',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\SituacoesInteracoes\SituacoesInteracoesEntity::class,
            'collection_class' => \CRM\V1\Rest\SituacoesInteracoes\SituacoesInteracoesCollection::class,
            'service_name' => 'situacoes_interacoes',
        ],
        'CRM\\V1\\Rest\\TiposLigacoes\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TiposLigacoes\\TiposLigacoesResource',
            'route_name' => 'crm.rest.tipos-ligacoes',
            'route_identifier_name' => 'tipos_ligacoes_id',
            'collection_name' => 'tipos_ligacoes',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TiposLigacoes\TiposLigacoesEntity::class,
            'collection_class' => \CRM\V1\Rest\TiposLigacoes\TiposLigacoesCollection::class,
            'service_name' => 'tipos_ligacoes',
        ],
        'CRM\\V1\\Rest\\SubcategoriaProduto\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\SubcategoriaProduto\\SubcategoriaProdutoResource',
            'route_name' => 'crm.rest.subcategoria-produto',
            'route_identifier_name' => 'subcategoria_produto_id',
            'collection_name' => 'subcategoria_produto',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\SubcategoriaProduto\SubcategoriaProdutoEntity::class,
            'collection_class' => \CRM\V1\Rest\SubcategoriaProduto\SubcategoriaProdutoCollection::class,
            'service_name' => 'subcategoria_produto',
        ],
        'CRM\\V1\\Rest\\SituacaoProposta\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\SituacaoProposta\\SituacaoPropostaResource',
            'route_name' => 'crm.rest.situacao-proposta',
            'route_identifier_name' => 'situacao_proposta_id',
            'collection_name' => 'situacao_proposta',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\SituacaoProposta\SituacaoPropostaEntity::class,
            'collection_class' => \CRM\V1\Rest\SituacaoProposta\SituacaoPropostaCollection::class,
            'service_name' => 'situacao_proposta',
        ],
        'CRM\\V1\\Rest\\TiposEnvios\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TiposEnvios\\TiposEnviosResource',
            'route_name' => 'crm.rest.tipos-envios',
            'route_identifier_name' => 'tipos_envios_id',
            'collection_name' => 'tipos_envios',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TiposEnvios\TiposEnviosEntity::class,
            'collection_class' => \CRM\V1\Rest\TiposEnvios\TiposEnviosCollection::class,
            'service_name' => 'tipos_envios',
        ],
        'CRM\\V1\\Rest\\TiposProdutos\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TiposProdutos\\TiposProdutosResource',
            'route_name' => 'crm.rest.tipos-produtos',
            'route_identifier_name' => 'tipos_produtos_id',
            'collection_name' => 'tipos_produtos',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TiposProdutos\TiposProdutosEntity::class,
            'collection_class' => \CRM\V1\Rest\TiposProdutos\TiposProdutosCollection::class,
            'service_name' => 'tipos_produtos',
        ],
        'CRM\\V1\\Rest\\TiposOperadora\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TiposOperadora\\TiposOperadoraResource',
            'route_name' => 'crm.rest.tipos-operadora',
            'route_identifier_name' => 'tipos_operadora_id',
            'collection_name' => 'tipos_operadora',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TiposOperadora\TiposOperadoraEntity::class,
            'collection_class' => \CRM\V1\Rest\TiposOperadora\TiposOperadoraCollection::class,
            'service_name' => 'tipos_operadora',
        ],
        'CRM\\V1\\Rest\\SolicitacaoReposicao\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\SolicitacaoReposicao\\SolicitacaoReposicaoResource',
            'route_name' => 'crm.rest.solicitacao-reposicao',
            'route_identifier_name' => 'solicitacao_reposicao_id',
            'collection_name' => 'solicitacao_reposicao',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\SolicitacaoReposicao\SolicitacaoReposicaoEntity::class,
            'collection_class' => \CRM\V1\Rest\SolicitacaoReposicao\SolicitacaoReposicaoCollection::class,
            'service_name' => 'solicitacao_reposicao',
        ],
        'CRM\\V1\\Rest\\RegrasBloqueio\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\RegrasBloqueio\\RegrasBloqueioResource',
            'route_name' => 'crm.rest.regras-bloqueio',
            'route_identifier_name' => 'regras_bloqueio_id',
            'collection_name' => 'regras_bloqueio',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\RegrasBloqueio\RegrasBloqueioEntity::class,
            'collection_class' => \CRM\V1\Rest\RegrasBloqueio\RegrasBloqueioCollection::class,
            'service_name' => 'regras_bloqueio',
        ],
        'CRM\\V1\\Rest\\Usuarios\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Usuarios\\UsuariosResource',
            'route_name' => 'crm.rest.usuarios',
            'route_identifier_name' => 'usuarios_id',
            'collection_name' => 'usuarios',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
                4 => 'POST',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Usuarios\UsuariosEntity::class,
            'collection_class' => \CRM\V1\Rest\Usuarios\UsuariosCollection::class,
            'service_name' => 'usuarios',
        ],
        'CRM\\V1\\Rest\\TiposFornecedores\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TiposFornecedores\\TiposFornecedoresResource',
            'route_name' => 'crm.rest.tipos-fornecedores',
            'route_identifier_name' => 'tipos_fornecedores_id',
            'collection_name' => 'tipos_fornecedores',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TiposFornecedores\TiposFornecedoresEntity::class,
            'collection_class' => \CRM\V1\Rest\TiposFornecedores\TiposFornecedoresCollection::class,
            'service_name' => 'tipos_fornecedores',
        ],
        'CRM\\V1\\Rest\\TiposPlantoes\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TiposPlantoes\\TiposPlantoesResource',
            'route_name' => 'crm.rest.tipos-plantoes',
            'route_identifier_name' => 'tipos_plantoes_id',
            'collection_name' => 'tipos_plantoes',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TiposPlantoes\TiposPlantoesEntity::class,
            'collection_class' => \CRM\V1\Rest\TiposPlantoes\TiposPlantoesCollection::class,
            'service_name' => 'tipos_plantoes',
        ],
        'CRM\\V1\\Rest\\TiposEntrada\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TiposEntrada\\TiposEntradaResource',
            'route_name' => 'crm.rest.tipos-entrada',
            'route_identifier_name' => 'tipos_entrada_id',
            'collection_name' => 'tipos_entrada',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TiposEntrada\TiposEntradaEntity::class,
            'collection_class' => \CRM\V1\Rest\TiposEntrada\TiposEntradaCollection::class,
            'service_name' => 'tipos_entrada',
        ],
        'CRM\\V1\\Rest\\Urls\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Urls\\UrlsResource',
            'route_name' => 'crm.rest.urls',
            'route_identifier_name' => 'urls_id',
            'collection_name' => 'urls',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Urls\UrlsEntity::class,
            'collection_class' => \CRM\V1\Rest\Urls\UrlsCollection::class,
            'service_name' => 'urls',
        ],
        'CRM\\V1\\Rest\\TesteTiago\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TesteTiago\\TesteTiagoResource',
            'route_name' => 'crm.rest.teste-tiago',
            'route_identifier_name' => 'teste_tiago_id',
            'collection_name' => 'teste_tiago',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TesteTiago\TesteTiagoEntity::class,
            'collection_class' => \CRM\V1\Rest\TesteTiago\TesteTiagoCollection::class,
            'service_name' => 'teste_tiago',
        ],
        'CRM\\V1\\Rest\\Sites\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Sites\\SitesResource',
            'route_name' => 'crm.rest.sites',
            'route_identifier_name' => 'sites_id',
            'collection_name' => 'sites',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Sites\SitesEntity::class,
            'collection_class' => \CRM\V1\Rest\Sites\SitesCollection::class,
            'service_name' => 'sites',
        ],
        'CRM\\V1\\Rest\\TelefonesContato\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\TelefonesContato\\TelefonesContatoResource',
            'route_name' => 'crm.rest.telefones-contato',
            'route_identifier_name' => 'telefones_contato_id',
            'collection_name' => 'telefones_contato',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\TelefonesContato\TelefonesContatoEntity::class,
            'collection_class' => \CRM\V1\Rest\TelefonesContato\TelefonesContatoCollection::class,
            'service_name' => 'telefones_contato',
        ],
        'CRM\\V1\\Rest\\VersaoItens\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\VersaoItens\\VersaoItensResource',
            'route_name' => 'crm.rest.versao-itens',
            'route_identifier_name' => 'versao_itens_id',
            'collection_name' => 'versao_itens',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\VersaoItens\VersaoItensEntity::class,
            'collection_class' => \CRM\V1\Rest\VersaoItens\VersaoItensCollection::class,
            'service_name' => 'versao_itens',
        ],
        'CRM\\V1\\Rest\\Versao\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Versao\\VersaoResource',
            'route_name' => 'crm.rest.versao',
            'route_identifier_name' => 'versao_id',
            'collection_name' => 'versao',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Versao\VersaoEntity::class,
            'collection_class' => \CRM\V1\Rest\Versao\VersaoCollection::class,
            'service_name' => 'versao',
        ],
        'CRM\\V1\\Rest\\StatusChamado\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\StatusChamado\\StatusChamadoResource',
            'route_name' => 'crm.rest.status-chamado',
            'route_identifier_name' => 'status_chamado_id',
            'collection_name' => 'status_chamado',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\StatusChamado\StatusChamadoEntity::class,
            'collection_class' => \CRM\V1\Rest\StatusChamado\StatusChamadoCollection::class,
            'service_name' => 'status_chamado',
        ],
        'CRM\\V1\\Rest\\Sprint\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\Sprint\\SprintResource',
            'route_name' => 'crm.rest.sprint',
            'route_identifier_name' => 'sprint_id',
            'collection_name' => 'sprint',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Sprint\SprintEntity::class,
            'collection_class' => \CRM\V1\Rest\Sprint\SprintCollection::class,
            'service_name' => 'sprint',
        ],
        'CRM\\V1\\Rest\\VendaProdutoContato\\Controller' => [
            'listener' => 'CRM\\V1\\Rest\\VendaProdutoContato\\VendaProdutoContatoResource',
            'route_name' => 'crm.rest.venda-produto-contato',
            'route_identifier_name' => 'venda_produto_contato_id',
            'collection_name' => 'venda_produto_contato',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\VendaProdutoContato\VendaProdutoContatoEntity::class,
            'collection_class' => \CRM\V1\Rest\VendaProdutoContato\VendaProdutoContatoCollection::class,
            'service_name' => 'venda_produto_contato',
        ],
        'CRM\\V1\\Rest\\Gesto_nacional_dash_board\\Controller' => [
            'listener' => \CRM\V1\Rest\Gesto_nacional_dash_board\Gesto_nacional_dash_boardResource::class,
            'route_name' => 'crm.rest.gesto_nacional_dash_board',
            'route_identifier_name' => 'gesto_nacional_dash_board_id',
            'collection_name' => 'gesto_nacional_dash_board',
            'entity_http_methods' => [
                0 => 'GET',
                1 => 'PATCH',
                2 => 'PUT',
                3 => 'DELETE',
            ],
            'collection_http_methods' => [
                0 => 'GET',
                1 => 'POST',
            ],
            'collection_query_whitelist' => [],
            'page_size' => 25,
            'page_size_param' => null,
            'entity_class' => \CRM\V1\Rest\Gesto_nacional_dash_board\Gesto_nacional_dash_boardEntity::class,
            'collection_class' => \CRM\V1\Rest\Gesto_nacional_dash_board\Gesto_nacional_dash_boardCollection::class,
            'service_name' => 'gesto_nacional_dash_board',
        ],
    ],
    'zf-content-negotiation' => [
        'controllers' => [
            'CRM\\V1\\Rest\\AgendaUsuario\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Campanhas\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\AutorizacaoReposicao\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\ArquivoUpload\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Chamado\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\CategoriaChamado\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Cidades\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Contatos\\Controller' => 'Json',
            'CRM\\V1\\Rest\\ContatosProdutos\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\CronTarefasAgendadas\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\EmailsContato\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Empresas\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Estados\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\FilaChamado\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Filiais\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Fornecedores\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\GrupoVendas\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\InteracaoChamado\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\InteracoesContato\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\InteracoesOrigem\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\LigacoesInformacao\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Logs\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\LogsContato\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Modulos\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\ModulosPermissoes\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Operadoras\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\OperadorasProdutos\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\OperadorasTelefones\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Perfil\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Plantoes\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\PreCadastro\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Produtos\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\ProdutosCategorias\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\PropostaUsuario\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Propostas\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TipoPropostaOperadora\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\SituacoesInteracoes\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TiposLigacoes\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\SubcategoriaProduto\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\SituacaoProposta\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TiposEnvios\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TiposProdutos\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TiposOperadora\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\SolicitacaoReposicao\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\RegrasBloqueio\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Usuarios\\Controller' => 'Json',
            'CRM\\V1\\Rest\\TiposFornecedores\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TiposPlantoes\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TiposEntrada\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Urls\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TesteTiago\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Sites\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\TelefonesContato\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\VersaoItens\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Versao\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\StatusChamado\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Sprint\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\VendaProdutoContato\\Controller' => 'HalJson',
            'CRM\\V1\\Rest\\Gesto_nacional_dash_board\\Controller' => 'Json',
        ],
        'accept_whitelist' => [
            'CRM\\V1\\Rest\\AgendaUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Campanhas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\AutorizacaoReposicao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ArquivoUpload\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Chamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\CategoriaChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Cidades\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Contatos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ContatosProdutos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\CronTarefasAgendadas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\EmailsContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Empresas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Estados\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\FilaChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Filiais\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Fornecedores\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\GrupoVendas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\InteracaoChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\InteracoesContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\InteracoesOrigem\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\LigacoesInformacao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Logs\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\LogsContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Modulos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ModulosPermissoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Operadoras\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\OperadorasProdutos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\OperadorasTelefones\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Perfil\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Plantoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\PreCadastro\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Produtos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ProdutosCategorias\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\PropostaUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Propostas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TipoPropostaOperadora\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SituacoesInteracoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposLigacoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SubcategoriaProduto\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SituacaoProposta\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposEnvios\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposProdutos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposOperadora\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SolicitacaoReposicao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\RegrasBloqueio\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Usuarios\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposFornecedores\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposPlantoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposEntrada\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Urls\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TesteTiago\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Sites\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TelefonesContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\VersaoItens\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Versao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\StatusChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Sprint\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\VendaProdutoContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Gesto_nacional_dash_board\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/hal+json',
                2 => 'application/json',
            ],
        ],
        'content_type_whitelist' => [
            'CRM\\V1\\Rest\\AgendaUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Campanhas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\AutorizacaoReposicao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ArquivoUpload\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Chamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\CategoriaChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Cidades\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Contatos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ContatosProdutos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\CronTarefasAgendadas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\EmailsContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Empresas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Estados\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\FilaChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Filiais\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Fornecedores\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\GrupoVendas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\InteracaoChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\InteracoesContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\InteracoesOrigem\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\LigacoesInformacao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Logs\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\LogsContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Modulos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ModulosPermissoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Operadoras\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\OperadorasProdutos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\OperadorasTelefones\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Perfil\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Plantoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\PreCadastro\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Produtos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\ProdutosCategorias\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\PropostaUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Propostas\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TipoPropostaOperadora\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SituacoesInteracoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposLigacoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SubcategoriaProduto\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SituacaoProposta\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposEnvios\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposProdutos\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposOperadora\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\SolicitacaoReposicao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\RegrasBloqueio\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Usuarios\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposFornecedores\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposPlantoes\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TiposEntrada\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Urls\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TesteTiago\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Sites\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\TelefonesContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\VersaoItens\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Versao\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\StatusChamado\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Sprint\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\VendaProdutoContato\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
            'CRM\\V1\\Rest\\Gesto_nacional_dash_board\\Controller' => [
                0 => 'application/vnd.crm.v1+json',
                1 => 'application/json',
            ],
        ],
    ],
    'zf-hal' => [
        'metadata_map' => [
            \CRM\V1\Rest\AgendaUsuario\AgendaUsuarioEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.agenda-usuario',
                'route_identifier_name' => 'agenda_usuario_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\AgendaUsuario\AgendaUsuarioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.agenda-usuario',
                'route_identifier_name' => 'agenda_usuario_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Campanhas\CampanhasEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.campanhas',
                'route_identifier_name' => 'campanhas_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Campanhas\CampanhasCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.campanhas',
                'route_identifier_name' => 'campanhas_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\AutorizacaoReposicao\AutorizacaoReposicaoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.autorizacao-reposicao',
                'route_identifier_name' => 'autorizacao_reposicao_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\AutorizacaoReposicao\AutorizacaoReposicaoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.autorizacao-reposicao',
                'route_identifier_name' => 'autorizacao_reposicao_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\ArquivoUpload\ArquivoUploadEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.arquivo-upload',
                'route_identifier_name' => 'arquivo_upload_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\ArquivoUpload\ArquivoUploadCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.arquivo-upload',
                'route_identifier_name' => 'arquivo_upload_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Chamado\ChamadoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.chamado',
                'route_identifier_name' => 'chamado_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Chamado\ChamadoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.chamado',
                'route_identifier_name' => 'chamado_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\CategoriaChamado\CategoriaChamadoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.categoria-chamado',
                'route_identifier_name' => 'categoria_chamado_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\CategoriaChamado\CategoriaChamadoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.categoria-chamado',
                'route_identifier_name' => 'categoria_chamado_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Cidades\CidadesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.cidades',
                'route_identifier_name' => 'cidades_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Cidades\CidadesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.cidades',
                'route_identifier_name' => 'cidades_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\ContatoCorretorBloqueio\ContatoCorretorBloqueioEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.contato-corretor-bloqueio',
                'route_identifier_name' => 'contato_corretor_bloqueio_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\ContatoCorretorBloqueio\ContatoCorretorBloqueioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.contato-corretor-bloqueio',
                'route_identifier_name' => 'contato_corretor_bloqueio_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Contatos\ContatosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.contatos',
                'route_identifier_name' => 'contatos_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Contatos\ContatosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.contatos',
                'route_identifier_name' => 'contatos_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\ContatosProdutos\ContatosProdutosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.contatos-produtos',
                'route_identifier_name' => 'contatos_produtos_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\ContatosProdutos\ContatosProdutosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.contatos-produtos',
                'route_identifier_name' => 'contatos_produtos_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\CronTarefasAgendadas\CronTarefasAgendadasEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.cron-tarefas-agendadas',
                'route_identifier_name' => 'cron_tarefas_agendadas_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\CronTarefasAgendadas\CronTarefasAgendadasCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.cron-tarefas-agendadas',
                'route_identifier_name' => 'cron_tarefas_agendadas_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\EmailsContato\EmailsContatoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.emails-contato',
                'route_identifier_name' => 'emails_contato_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\EmailsContato\EmailsContatoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.emails-contato',
                'route_identifier_name' => 'emails_contato_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Empresas\EmpresasEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.empresas',
                'route_identifier_name' => 'empresas_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Empresas\EmpresasCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.empresas',
                'route_identifier_name' => 'empresas_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Estados\EstadosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.estados',
                'route_identifier_name' => 'estados_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Estados\EstadosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.estados',
                'route_identifier_name' => 'estados_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\FilaChamado\FilaChamadoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.fila-chamado',
                'route_identifier_name' => 'fila_chamado_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\FilaChamado\FilaChamadoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.fila-chamado',
                'route_identifier_name' => 'fila_chamado_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Filiais\FiliaisEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.filiais',
                'route_identifier_name' => 'filiais_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Filiais\FiliaisCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.filiais',
                'route_identifier_name' => 'filiais_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Fornecedores\FornecedoresEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.fornecedores',
                'route_identifier_name' => 'fornecedores_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Fornecedores\FornecedoresCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.fornecedores',
                'route_identifier_name' => 'fornecedores_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\GrupoVendas\GrupoVendasEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.grupo-vendas',
                'route_identifier_name' => 'grupo_vendas_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\GrupoVendas\GrupoVendasCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.grupo-vendas',
                'route_identifier_name' => 'grupo_vendas_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\InteracaoChamado\InteracaoChamadoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.interacao-chamado',
                'route_identifier_name' => 'interacao_chamado_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\InteracaoChamado\InteracaoChamadoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.interacao-chamado',
                'route_identifier_name' => 'interacao_chamado_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\InteracoesContato\InteracoesContatoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.interacoes-contato',
                'route_identifier_name' => 'interacoes_contato_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\InteracoesContato\InteracoesContatoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.interacoes-contato',
                'route_identifier_name' => 'interacoes_contato_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\InteracoesOrigem\InteracoesOrigemEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.interacoes-origem',
                'route_identifier_name' => 'interacoes_origem_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\InteracoesOrigem\InteracoesOrigemCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.interacoes-origem',
                'route_identifier_name' => 'interacoes_origem_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\LigacoesInformacao\LigacoesInformacaoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.ligacoes-informacao',
                'route_identifier_name' => 'ligacoes_informacao_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\LigacoesInformacao\LigacoesInformacaoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.ligacoes-informacao',
                'route_identifier_name' => 'ligacoes_informacao_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\LogDesbloqueioUsuario\LogDesbloqueioUsuarioEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.log-desbloqueio-usuario',
                'route_identifier_name' => 'log_desbloqueio_usuario_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\LogDesbloqueioUsuario\LogDesbloqueioUsuarioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.log-desbloqueio-usuario',
                'route_identifier_name' => 'log_desbloqueio_usuario_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Logs\LogsEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.logs',
                'route_identifier_name' => 'logs_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Logs\LogsCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.logs',
                'route_identifier_name' => 'logs_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\LogsContato\LogsContatoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.logs-contato',
                'route_identifier_name' => 'logs_contato_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\LogsContato\LogsContatoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.logs-contato',
                'route_identifier_name' => 'logs_contato_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Modulos\ModulosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.modulos',
                'route_identifier_name' => 'modulos_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Modulos\ModulosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.modulos',
                'route_identifier_name' => 'modulos_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\ModulosPermissoes\ModulosPermissoesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.modulos-permissoes',
                'route_identifier_name' => 'modulos_permissoes_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\ModulosPermissoes\ModulosPermissoesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.modulos-permissoes',
                'route_identifier_name' => 'modulos_permissoes_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Operadoras\OperadorasEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.operadoras',
                'route_identifier_name' => 'operadoras_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Operadoras\OperadorasCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.operadoras',
                'route_identifier_name' => 'operadoras_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\OperadorasProdutos\OperadorasProdutosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.operadoras-produtos',
                'route_identifier_name' => 'operadoras_produtos_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\OperadorasProdutos\OperadorasProdutosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.operadoras-produtos',
                'route_identifier_name' => 'operadoras_produtos_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\OperadorasTelefones\OperadorasTelefonesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.operadoras-telefones',
                'route_identifier_name' => 'operadoras_telefones_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\OperadorasTelefones\OperadorasTelefonesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.operadoras-telefones',
                'route_identifier_name' => 'operadoras_telefones_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\OutrasOrigensInteracoes\OutrasOrigensInteracoesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.outras-origens-interacoes',
                'route_identifier_name' => 'outras_origens_interacoes_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\OutrasOrigensInteracoes\OutrasOrigensInteracoesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.outras-origens-interacoes',
                'route_identifier_name' => 'outras_origens_interacoes_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Perfil\PerfilEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.perfil',
                'route_identifier_name' => 'perfil_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Perfil\PerfilCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.perfil',
                'route_identifier_name' => 'perfil_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Plantoes\PlantoesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.plantoes',
                'route_identifier_name' => 'plantoes_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Plantoes\PlantoesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.plantoes',
                'route_identifier_name' => 'plantoes_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\PreCadastro\PreCadastroEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.pre-cadastro',
                'route_identifier_name' => 'pre_cadastro_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\PreCadastro\PreCadastroCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.pre-cadastro',
                'route_identifier_name' => 'pre_cadastro_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Produtos\ProdutosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.produtos',
                'route_identifier_name' => 'produtos_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Produtos\ProdutosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.produtos',
                'route_identifier_name' => 'produtos_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\ProdutosCategorias\ProdutosCategoriasEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.produtos-categorias',
                'route_identifier_name' => 'produtos_categorias_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\ProdutosCategorias\ProdutosCategoriasCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.produtos-categorias',
                'route_identifier_name' => 'produtos_categorias_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\PropostaUsuario\PropostaUsuarioEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.proposta-usuario',
                'route_identifier_name' => 'proposta_usuario_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\PropostaUsuario\PropostaUsuarioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.proposta-usuario',
                'route_identifier_name' => 'proposta_usuario_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Propostas\PropostasEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.propostas',
                'route_identifier_name' => 'propostas_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Propostas\PropostasCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.propostas',
                'route_identifier_name' => 'propostas_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\QuantidadePropostasUsuario\QuantidadePropostasUsuarioEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.quantidade-propostas-usuario',
                'route_identifier_name' => 'quantidade_propostas_usuario_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\QuantidadePropostasUsuario\QuantidadePropostasUsuarioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.quantidade-propostas-usuario',
                'route_identifier_name' => 'quantidade_propostas_usuario_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TipoPropostaOperadora\TipoPropostaOperadoraEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipo-proposta-operadora',
                'route_identifier_name' => 'tipo_proposta_operadora_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TipoPropostaOperadora\TipoPropostaOperadoraCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipo-proposta-operadora',
                'route_identifier_name' => 'tipo_proposta_operadora_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\SituacoesInteracoes\SituacoesInteracoesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.situacoes-interacoes',
                'route_identifier_name' => 'situacoes_interacoes_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\SituacoesInteracoes\SituacoesInteracoesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.situacoes-interacoes',
                'route_identifier_name' => 'situacoes_interacoes_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TiposLigacoes\TiposLigacoesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-ligacoes',
                'route_identifier_name' => 'tipos_ligacoes_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TiposLigacoes\TiposLigacoesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-ligacoes',
                'route_identifier_name' => 'tipos_ligacoes_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\SubcategoriaProduto\SubcategoriaProdutoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.subcategoria-produto',
                'route_identifier_name' => 'subcategoria_produto_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\SubcategoriaProduto\SubcategoriaProdutoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.subcategoria-produto',
                'route_identifier_name' => 'subcategoria_produto_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\SituacaoProposta\SituacaoPropostaEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.situacao-proposta',
                'route_identifier_name' => 'situacao_proposta_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\SituacaoProposta\SituacaoPropostaCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.situacao-proposta',
                'route_identifier_name' => 'situacao_proposta_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TiposEnvios\TiposEnviosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-envios',
                'route_identifier_name' => 'tipos_envios_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TiposEnvios\TiposEnviosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-envios',
                'route_identifier_name' => 'tipos_envios_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TiposProdutos\TiposProdutosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-produtos',
                'route_identifier_name' => 'tipos_produtos_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TiposProdutos\TiposProdutosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-produtos',
                'route_identifier_name' => 'tipos_produtos_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TiposOperadora\TiposOperadoraEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-operadora',
                'route_identifier_name' => 'tipos_operadora_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TiposOperadora\TiposOperadoraCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-operadora',
                'route_identifier_name' => 'tipos_operadora_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\SolicitacaoReposicao\SolicitacaoReposicaoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.solicitacao-reposicao',
                'route_identifier_name' => 'solicitacao_reposicao_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\SolicitacaoReposicao\SolicitacaoReposicaoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.solicitacao-reposicao',
                'route_identifier_name' => 'solicitacao_reposicao_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\RegrasBloqueio\RegrasBloqueioEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.regras-bloqueio',
                'route_identifier_name' => 'regras_bloqueio_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\RegrasBloqueio\RegrasBloqueioCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.regras-bloqueio',
                'route_identifier_name' => 'regras_bloqueio_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Usuarios\UsuariosEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.usuarios',
                'route_identifier_name' => 'usuarios_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Usuarios\UsuariosCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.usuarios',
                'route_identifier_name' => 'usuarios_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TiposFornecedores\TiposFornecedoresEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-fornecedores',
                'route_identifier_name' => 'tipos_fornecedores_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TiposFornecedores\TiposFornecedoresCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-fornecedores',
                'route_identifier_name' => 'tipos_fornecedores_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TiposPlantoes\TiposPlantoesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-plantoes',
                'route_identifier_name' => 'tipos_plantoes_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TiposPlantoes\TiposPlantoesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-plantoes',
                'route_identifier_name' => 'tipos_plantoes_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TiposEntrada\TiposEntradaEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-entrada',
                'route_identifier_name' => 'tipos_entrada_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TiposEntrada\TiposEntradaCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.tipos-entrada',
                'route_identifier_name' => 'tipos_entrada_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Urls\UrlsEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.urls',
                'route_identifier_name' => 'urls_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Urls\UrlsCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.urls',
                'route_identifier_name' => 'urls_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TesteTiago\TesteTiagoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.teste-tiago',
                'route_identifier_name' => 'teste_tiago_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TesteTiago\TesteTiagoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.teste-tiago',
                'route_identifier_name' => 'teste_tiago_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Sites\SitesEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.sites',
                'route_identifier_name' => 'sites_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Sites\SitesCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.sites',
                'route_identifier_name' => 'sites_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\TelefonesContato\TelefonesContatoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.telefones-contato',
                'route_identifier_name' => 'telefones_contato_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\TelefonesContato\TelefonesContatoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.telefones-contato',
                'route_identifier_name' => 'telefones_contato_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\VersaoItens\VersaoItensEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.versao-itens',
                'route_identifier_name' => 'versao_itens_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\VersaoItens\VersaoItensCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.versao-itens',
                'route_identifier_name' => 'versao_itens_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Versao\VersaoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.versao',
                'route_identifier_name' => 'versao_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Versao\VersaoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.versao',
                'route_identifier_name' => 'versao_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\StatusChamado\StatusChamadoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.status-chamado',
                'route_identifier_name' => 'status_chamado_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\StatusChamado\StatusChamadoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.status-chamado',
                'route_identifier_name' => 'status_chamado_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Sprint\SprintEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.sprint',
                'route_identifier_name' => 'sprint_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Sprint\SprintCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.sprint',
                'route_identifier_name' => 'sprint_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\VendaProdutoContato\VendaProdutoContatoEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.venda-produto-contato',
                'route_identifier_name' => 'venda_produto_contato_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\VendaProdutoContato\VendaProdutoContatoCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.venda-produto-contato',
                'route_identifier_name' => 'venda_produto_contato_id',
                'is_collection' => true,
            ],
            \CRM\V1\Rest\Gesto_nacional_dash_board\Gesto_nacional_dash_boardEntity::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.gesto_nacional_dash_board',
                'route_identifier_name' => 'gesto_nacional_dash_board_id',
                'hydrator' => \Zend\Hydrator\ArraySerializable::class,
            ],
            \CRM\V1\Rest\Gesto_nacional_dash_board\Gesto_nacional_dash_boardCollection::class => [
                'entity_identifier_name' => 'id',
                'route_name' => 'crm.rest.gesto_nacional_dash_board',
                'route_identifier_name' => 'gesto_nacional_dash_board_id',
                'is_collection' => true,
            ],
        ],
    ],
    'zf-apigility' => [
        'db-connected' => [
            'CRM\\V1\\Rest\\AgendaUsuario\\AgendaUsuarioResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'agenda_usuario',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\AgendaUsuario\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Campanhas\\CampanhasResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'campanhas',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Campanhas\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\AutorizacaoReposicao\\AutorizacaoReposicaoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'autorizacao_reposicao',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\AutorizacaoReposicao\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\ArquivoUpload\\ArquivoUploadResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'arquivo_upload',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\ArquivoUpload\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Chamado\\ChamadoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'chamado',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Chamado\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\CategoriaChamado\\CategoriaChamadoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'categoria_chamado',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\CategoriaChamado\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Cidades\\CidadesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'cidades',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Cidades\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\ContatoCorretorBloqueioResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'contato_corretor_bloqueio',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Contatos\\ContatosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'contatos',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Contatos\\Controller',
                'entity_identifier_name' => 'id',
                'table_service' => 'CRM\\V1\\Rest\\Contatos\\ContatosResource\\Table',
            ],
            'CRM\\V1\\Rest\\ContatosProdutos\\ContatosProdutosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'contatos_produtos',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\ContatosProdutos\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\CronTarefasAgendadas\\CronTarefasAgendadasResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'cron_tarefas_agendadas',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\CronTarefasAgendadas\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\EmailsContato\\EmailsContatoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'emails_contato',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\EmailsContato\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Empresas\\EmpresasResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'empresas',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Empresas\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Estados\\EstadosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'estados',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Estados\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\FilaChamado\\FilaChamadoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'fila_chamado',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\FilaChamado\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Filiais\\FiliaisResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'filiais',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Filiais\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Fornecedores\\FornecedoresResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'fornecedores',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Fornecedores\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\GrupoVendas\\GrupoVendasResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'grupo_vendas',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\GrupoVendas\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\InteracaoChamado\\InteracaoChamadoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'interacao_chamado',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\InteracaoChamado\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\InteracoesContato\\InteracoesContatoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'interacoes_contato',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\InteracoesContato\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\InteracoesOrigem\\InteracoesOrigemResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'interacoes_origem',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\InteracoesOrigem\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\LigacoesInformacao\\LigacoesInformacaoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'ligacoes_informacao',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\LigacoesInformacao\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\LogDesbloqueioUsuarioResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'log_desbloqueio_usuario',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Logs\\LogsResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'logs',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Logs\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\LogsContato\\LogsContatoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'logs_contato',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\LogsContato\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Modulos\\ModulosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'modulos',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Modulos\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\ModulosPermissoes\\ModulosPermissoesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'modulos_permissoes',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\ModulosPermissoes\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Operadoras\\OperadorasResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'operadoras',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Operadoras\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\OperadorasProdutos\\OperadorasProdutosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'operadoras_produtos',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\OperadorasProdutos\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\OperadorasTelefones\\OperadorasTelefonesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'operadoras_telefones',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\OperadorasTelefones\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\OutrasOrigensInteracoesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'outras_origens_interacoes',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Perfil\\PerfilResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'perfil',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Perfil\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Plantoes\\PlantoesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'plantoes',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Plantoes\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\PreCadastro\\PreCadastroResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'pre_cadastro',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\PreCadastro\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Produtos\\ProdutosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'produtos',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Produtos\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\ProdutosCategorias\\ProdutosCategoriasResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'produtos_categorias',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\ProdutosCategorias\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\PropostaUsuario\\PropostaUsuarioResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'proposta_usuario',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\PropostaUsuario\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Propostas\\PropostasResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'propostas',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Propostas\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\QuantidadePropostasUsuarioResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'quantidade_propostas_usuario',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TipoPropostaOperadora\\TipoPropostaOperadoraResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipo_proposta_operadora',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TipoPropostaOperadora\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\SituacoesInteracoes\\SituacoesInteracoesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'situacoes_interacoes',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\SituacoesInteracoes\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TiposLigacoes\\TiposLigacoesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipos_ligacoes',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TiposLigacoes\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\SubcategoriaProduto\\SubcategoriaProdutoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'subcategoria_produto',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\SubcategoriaProduto\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\SituacaoProposta\\SituacaoPropostaResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'situacao_proposta',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\SituacaoProposta\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TiposEnvios\\TiposEnviosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipos_envios',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TiposEnvios\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TiposProdutos\\TiposProdutosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipos_produtos',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TiposProdutos\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TiposOperadora\\TiposOperadoraResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipos_operadora',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TiposOperadora\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\SolicitacaoReposicao\\SolicitacaoReposicaoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'solicitacao_reposicao',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\SolicitacaoReposicao\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\RegrasBloqueio\\RegrasBloqueioResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'regras_bloqueio',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\RegrasBloqueio\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Usuarios\\UsuariosResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'usuarios',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Usuarios\\Controller',
                'entity_identifier_name' => 'id',
                'table_service' => 'CRM\\V1\\Rest\\Usuarios\\UsuariosResource\\Table',
            ],
            'CRM\\V1\\Rest\\TiposFornecedores\\TiposFornecedoresResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipos_fornecedores',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TiposFornecedores\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TiposPlantoes\\TiposPlantoesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipos_plantoes',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TiposPlantoes\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TiposEntrada\\TiposEntradaResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'tipos_entrada',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TiposEntrada\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Urls\\UrlsResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'urls',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Urls\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TesteTiago\\TesteTiagoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'teste_tiago',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TesteTiago\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Sites\\SitesResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'sites',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Sites\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\TelefonesContato\\TelefonesContatoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'telefones_contato',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\TelefonesContato\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\VersaoItens\\VersaoItensResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'versao_itens',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\VersaoItens\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Versao\\VersaoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'versao',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Versao\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\StatusChamado\\StatusChamadoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'status_chamado',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\StatusChamado\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\Sprint\\SprintResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'sprint',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\Sprint\\Controller',
                'entity_identifier_name' => 'id',
            ],
            'CRM\\V1\\Rest\\VendaProdutoContato\\VendaProdutoContatoResource' => [
                'adapter_name' => 'allcross_crm',
                'table_name' => 'venda_produto_contato',
                'hydrator_name' => \Zend\Hydrator\ArraySerializable::class,
                'controller_service_name' => 'CRM\\V1\\Rest\\VendaProdutoContato\\Controller',
                'entity_identifier_name' => 'id',
            ],
        ],
    ],
    'zf-content-validation' => [
        'CRM\\V1\\Rest\\LogsContato\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\LogsContato\\Validator',
        ],
        'CRM\\V1\\Rest\\CategoriaChamado\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\CategoriaChamado\\Validator',
        ],
        'CRM\\V1\\Rest\\ContatosProdutos\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\ContatosProdutos\\Validator',
        ],
        'CRM\\V1\\Rest\\CronTarefasAgendadas\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\CronTarefasAgendadas\\Validator',
        ],
        'CRM\\V1\\Rest\\Filiais\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Filiais\\Validator',
        ],
        'CRM\\V1\\Rest\\Fornecedores\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Fornecedores\\Validator',
        ],
        'CRM\\V1\\Rest\\Empresas\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Empresas\\Validator',
        ],
        'CRM\\V1\\Rest\\Campanhas\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Campanhas\\Validator',
        ],
        'CRM\\V1\\Rest\\Cidades\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Cidades\\Validator',
        ],
        'CRM\\V1\\Rest\\Logs\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Logs\\Validator',
        ],
        'CRM\\V1\\Rest\\SubcategoriaProduto\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\SubcategoriaProduto\\Validator',
        ],
        'CRM\\V1\\Rest\\AgendaUsuario\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\AgendaUsuario\\Validator',
        ],
        'CRM\\V1\\Rest\\Produtos\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Produtos\\Validator',
        ],
        'CRM\\V1\\Rest\\EmailsContato\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\EmailsContato\\Validator',
        ],
        'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Validator',
        ],
        'CRM\\V1\\Rest\\FilaChamado\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\FilaChamado\\Validator',
        ],
        'CRM\\V1\\Rest\\InteracoesOrigem\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\InteracoesOrigem\\Validator',
        ],
        'CRM\\V1\\Rest\\Modulos\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Modulos\\Validator',
        ],
        'CRM\\V1\\Rest\\PreCadastro\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\PreCadastro\\Validator',
        ],
        'CRM\\V1\\Rest\\Estados\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Estados\\Validator',
        ],
        'CRM\\V1\\Rest\\Propostas\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Propostas\\Validator',
        ],
        'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Validator',
        ],
        'CRM\\V1\\Rest\\TiposProdutos\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TiposProdutos\\Validator',
        ],
        'CRM\\V1\\Rest\\SituacaoProposta\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\SituacaoProposta\\Validator',
        ],
        'CRM\\V1\\Rest\\InteracaoChamado\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\InteracaoChamado\\Validator',
        ],
        'CRM\\V1\\Rest\\TipoPropostaOperadora\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TipoPropostaOperadora\\Validator',
        ],
        'CRM\\V1\\Rest\\OperadorasProdutos\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\OperadorasProdutos\\Validator',
        ],
        'CRM\\V1\\Rest\\Plantoes\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Plantoes\\Validator',
        ],
        'CRM\\V1\\Rest\\ModulosPermissoes\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\ModulosPermissoes\\Validator',
        ],
        'CRM\\V1\\Rest\\LigacoesInformacao\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\LigacoesInformacao\\Validator',
        ],
        'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Validator',
        ],
        'CRM\\V1\\Rest\\Chamado\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Chamado\\Validator',
        ],
        'CRM\\V1\\Rest\\PropostaUsuario\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\PropostaUsuario\\Validator',
        ],
        'CRM\\V1\\Rest\\Contatos\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Contatos\\Validator',
        ],
        'CRM\\V1\\Rest\\SituacoesInteracoes\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\SituacoesInteracoes\\Validator',
        ],
        'CRM\\V1\\Rest\\GrupoVendas\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\GrupoVendas\\Validator',
        ],
        'CRM\\V1\\Rest\\OperadorasTelefones\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\OperadorasTelefones\\Validator',
        ],
        'CRM\\V1\\Rest\\Operadoras\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Operadoras\\Validator',
        ],
        'CRM\\V1\\Rest\\TiposLigacoes\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TiposLigacoes\\Validator',
        ],
        'CRM\\V1\\Rest\\InteracoesContato\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\InteracoesContato\\Validator',
        ],
        'CRM\\V1\\Rest\\RegrasBloqueio\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\RegrasBloqueio\\Validator',
        ],
        'CRM\\V1\\Rest\\AutorizacaoReposicao\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\AutorizacaoReposicao\\Validator',
        ],
        'CRM\\V1\\Rest\\TiposEnvios\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TiposEnvios\\Validator',
        ],
        'CRM\\V1\\Rest\\TiposEntrada\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TiposEntrada\\Validator',
        ],
        'CRM\\V1\\Rest\\TiposPlantoes\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TiposPlantoes\\Validator',
        ],
        'CRM\\V1\\Rest\\TiposFornecedores\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TiposFornecedores\\Validator',
        ],
        'CRM\\V1\\Rest\\Usuarios\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Usuarios\\Validator',
        ],
        'CRM\\V1\\Rest\\TiposOperadora\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TiposOperadora\\Validator',
        ],
        'CRM\\V1\\Rest\\SolicitacaoReposicao\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\SolicitacaoReposicao\\Validator',
        ],
        'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Validator',
        ],
        'CRM\\V1\\Rest\\ArquivoUpload\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\ArquivoUpload\\Validator',
        ],
        'CRM\\V1\\Rest\\ProdutosCategorias\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\ProdutosCategorias\\Validator',
        ],
        'CRM\\V1\\Rest\\Perfil\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Perfil\\Validator',
        ],
        'CRM\\V1\\Rest\\Urls\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Urls\\Validator',
        ],
        'CRM\\V1\\Rest\\TesteTiago\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TesteTiago\\Validator',
        ],
        'CRM\\V1\\Rest\\Sites\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Sites\\Validator',
        ],
        'CRM\\V1\\Rest\\TelefonesContato\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\TelefonesContato\\Validator',
        ],
        'CRM\\V1\\Rest\\VersaoItens\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\VersaoItens\\Validator',
        ],
        'CRM\\V1\\Rest\\Versao\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Versao\\Validator',
        ],
        'CRM\\V1\\Rest\\StatusChamado\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\StatusChamado\\Validator',
        ],
        'CRM\\V1\\Rest\\Sprint\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\Sprint\\Validator',
        ],
        'CRM\\V1\\Rest\\VendaProdutoContato\\Controller' => [
            'input_filter' => 'CRM\\V1\\Rest\\VendaProdutoContato\\Validator',
        ],
    ],
    'input_filter_specs' => [
        'CRM\\V1\\Rest\\LogsContato\\Validator' => [
            0 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\CategoriaChamado\\Validator' => [
            0 => [
                'name' => 'categoria',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\ContatosProdutos\\Validator' => [
            0 => [
                'name' => 'contato_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbNoRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos_produtos',
                            'field' => 'contato_id',
                        ],
                    ],
                    1 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => null,
                            'field' => null,
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'produto_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbNoRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos_produtos',
                            'field' => 'produto_id',
                        ],
                    ],
                    1 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => null,
                            'field' => null,
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\CronTarefasAgendadas\\Validator' => [
            0 => [
                'name' => 'rota',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'tempo',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Filiais\\Validator' => [
            0 => [
                'name' => 'cidades_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'cidades',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'empresa_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'empresas',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'nome_fantasia',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'razao_social',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'cnpj',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'endereco',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'endereco_numero',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'endereco_complemento',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'telefone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            10 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            11 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            12 => [
                'name' => 'cep',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '10',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\Fornecedores\\Validator' => [
            0 => [
                'name' => 'tipo_fornecedores_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_fornecedores',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'razao_social',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'nome_fantasia',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'cnpj',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '20',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'telefone',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '12',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'email',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'site',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'endereco',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'endereco_numero',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'endereco_complemento',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            10 => [
                'name' => 'cep',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            11 => [
                'name' => 'data_criacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            12 => [
                'name' => 'data_alteracao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            13 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            14 => [
                'name' => 'origem_leads',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Empresas\\Validator' => [
            0 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Campanhas\\Validator' => [
            0 => [
                'name' => 'filiais_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'filiais',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'grupo_vendas_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'grupo_vendas',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'descricao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Cidades\\Validator' => [
            0 => [
                'name' => 'estados_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'estados',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'date_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Logs\\Validator' => [
            0 => [
                'name' => 'usuarios_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'table',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'old_value',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'data_alteracao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\SubcategoriaProduto\\Validator' => [
            0 => [
                'name' => 'subcategoria',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\AgendaUsuario\\Validator' => [
            0 => [
                'name' => 'usuario_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'titulo',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '200',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'data_agenda',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            7 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            8 => [
                'name' => 'concluida',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            9 => [
                'name' => 'class_name',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\Produtos\\Validator' => [
            0 => [
                'name' => 'tipos_produtos_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_produtos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            6 => [
                'name' => 'produto_categoria_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'produtos_categorias',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'operadoras_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'operadoras',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'subcategoria_produto_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'subcategoria_produto',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\EmailsContato\\Validator' => [
            0 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'email',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '100',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\QuantidadePropostasUsuario\\Validator' => [
            0 => [
                'name' => 'tipo_proposta_operadora',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipo_proposta_operadora',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\FilaChamado\\Validator' => [
            0 => [
                'name' => 'fila',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\InteracoesOrigem\\Validator' => [
            0 => [
                'name' => 'fornecedor_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'fornecedores',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'outras_origens_interacoes_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'outras_origens_interacoes',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'site_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'sites',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'origem',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Modulos\\Validator' => [
            0 => [
                'name' => 'modulo_pai_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'modulos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'url',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbNoRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'modulos',
                            'field' => 'url',
                        ],
                    ],
                    1 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'descricao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '100',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            7 => [
                'name' => 'ordem',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            8 => [
                'name' => 'icone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\PreCadastro\\Validator' => [
            0 => [
                'name' => 'interacoes_origem_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'interacoes_origem',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'usuario_validacao_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'contato_gerado_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'telefone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '20',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'email',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '100',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'oferecido_saude',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            7 => [
                'name' => 'oferecido_odonto',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            8 => [
                'name' => 'oferecido_seguros',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            9 => [
                'name' => 'tipo_pessoa',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '3',
                        ],
                    ],
                ],
            ],
            10 => [
                'name' => 'numero_pessoas_empresas',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            11 => [
                'name' => 'observacao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
            12 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            13 => [
                'name' => 'data_validacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            14 => [
                'name' => 'status',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '1',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\Estados\\Validator' => [
            0 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'sigla',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '2',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Propostas\\Validator' => [
            0 => [
                'name' => 'tipo_proposta_operadora',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipo_proposta_operadora',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'situacao_proposta',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'situacao_proposta',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'observacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\ContatoCorretorBloqueio\\Validator' => [
            0 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'corretor_usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_bloqueio',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_desbloqueio',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            5 => [
                'name' => 'regras_bloqueio_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'regras_bloqueio',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\TiposProdutos\\Validator' => [
            0 => [
                'name' => 'tipo',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'descricao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\SituacaoProposta\\Validator' => [
            0 => [
                'name' => 'situacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\InteracaoChamado\\Validator' => [
            0 => [
                'name' => 'chamado_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'chamado',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            4 => [
                'name' => 'usuarioCadastro_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\TipoPropostaOperadora\\Validator' => [
            0 => [
                'name' => 'operadoras_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'operadoras',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'maximo_retirada_usuario',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\OperadorasProdutos\\Validator' => [
            0 => [
                'name' => 'operadoras_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'operadoras',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'produtos_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'produtos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Plantoes\\Validator' => [
            0 => [
                'name' => 'data_criacao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'status',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            3 => [
                'name' => 'usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'tipos_plantoes_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_plantoes',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'filiais_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'filiais',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'bloqueado',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            7 => [
                'name' => 'ramal',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'ultimo_envio',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'usuario_corretor_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            10 => [
                'name' => 'posicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            11 => [
                'name' => 'reposicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            12 => [
                'name' => 'reposicao_paga',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            13 => [
                'name' => 'ligacoes_perdidas',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            14 => [
                'name' => 'sequencia',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\ModulosPermissoes\\Validator' => [
            0 => [
                'name' => 'modulos_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'modulos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'perfil_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'perfil',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'usuarios_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\LigacoesInformacao\\Validator' => [
            0 => [
                'name' => 'operadora_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'operadoras',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'usuario_cadastro_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'tipos_ligacao_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_ligacoes',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'nome',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'telefone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '20',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            7 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\LogDesbloqueioUsuario\\Validator' => [
            0 => [
                'name' => 'usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'usuario_executou_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Chamado\\Validator' => [
            0 => [
                'name' => 'usuario_cadastro_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'fila_chamado_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'fila_chamado',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'categoria_chamado_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'categoria_chamado',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'usuario_tecnico_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'usuario_triagem_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'sprint_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'sprint',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'status_chamado_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'status_chamado',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'titulo',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            9 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            10 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            11 => [
                'name' => 'prioridade',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            12 => [
                'name' => 'extimativa_conclusao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            13 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\PropostaUsuario\\Validator' => [
            0 => [
                'name' => 'usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'propostas',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'propostas',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'observacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Contatos\\Validator' => [
            0 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'idade',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'observacao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            5 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            6 => [
                'name' => 'empresa',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '100',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'numero_pessoas_empresas',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            8 => [
                'name' => 'interesse',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'operadoras_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'operadoras',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            10 => [
                'name' => 'enviar_para',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            11 => [
                'name' => 'oferecido_saude',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            12 => [
                'name' => 'oferecido_odonto',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            13 => [
                'name' => 'oferecido_seguros',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\SituacoesInteracoes\\Validator' => [
            0 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            4 => [
                'name' => 'status_pai',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\GrupoVendas\\Validator' => [
            0 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'descricao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\OperadorasTelefones\\Validator' => [
            0 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '100',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Operadoras\\Validator' => [
            0 => [
                'name' => 'tipos_operadora_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_operadora',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'cidades_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'cidades',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'nome_fantasia',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '100',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'razao_social',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '100',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'cnpj',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '20',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'endereco',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'endereco_numero',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'endereco_complemento',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'telefone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            10 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            11 => [
                'name' => 'status',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            12 => [
                'name' => 'filial_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'filiais',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\TiposLigacoes\\Validator' => [
            0 => [
                'name' => 'tipo_ligacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\InteracoesContato\\Validator' => [
            0 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'situacao_interecoes_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'situacoes_interacoes',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'interacoes_origem_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'interacoes_origem',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'produtos_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'produtos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            7 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            8 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            9 => [
                'name' => 'corretor_usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            10 => [
                'name' => 'interacao_pai_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'interacoes_contato',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            11 => [
                'name' => 'tipo_envio_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_envios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            12 => [
                'name' => 'email_enviado',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            13 => [
                'name' => 'observacao_envio',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '200',
                        ],
                    ],
                ],
            ],
            14 => [
                'name' => 'tipo_ligacao_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_ligacoes',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            15 => [
                'name' => 'plantao_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'plantoes',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            16 => [
                'name' => 'solicita_reposicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            17 => [
                'name' => 'tipo_entrada_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'tipos_entrada',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            18 => [
                'name' => 'enviar_para',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '200',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\RegrasBloqueio\\Validator' => [
            0 => [
                'name' => 'regra',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'date_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\AutorizacaoReposicao\\Validator' => [
            0 => [
                'name' => 'gestor_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_avaliacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            3 => [
                'name' => 'solicitacao_reposicao_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbNoRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'autorizacao_reposicao',
                            'field' => 'solicitacao_reposicao_id',
                        ],
                    ],
                    1 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => null,
                            'field' => null,
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'contato_pagamento_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'data_pagamento',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            6 => [
                'name' => 'usuario_pagamento_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'reposicao_autorizada',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            8 => [
                'name' => 'observacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\TiposEnvios\\Validator' => [
            0 => [
                'name' => 'tipo_envio',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\TiposEntrada\\Validator' => [
            0 => [
                'name' => 'tipo_entrada',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\TiposPlantoes\\Validator' => [
            0 => [
                'name' => 'tipo',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'validade',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\TiposFornecedores\\Validator' => [
            0 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Usuarios\\Validator' => [
            0 => [
                'name' => 'perfil_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'perfil',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'sobre_nome',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'cpf',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '11',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'telefone_1',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'telefone_2',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'email',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            8 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            9 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            10 => [
                'name' => 'filiais_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'filiais',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            11 => [
                'name' => 'supervisor_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            12 => [
                'name' => 'envio_bloqueado',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            13 => [
                'name' => 'user_principal_name',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
            14 => [
                'name' => 'usuario',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '150',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\TiposOperadora\\Validator' => [
            0 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\SolicitacaoReposicao\\Validator' => [
            0 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'corretor_usuario_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_solicitacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_avaliacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            5 => [
                'name' => 'interacao_contato_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'interacoes_contato',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'usuario_avaliacao_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'contato_valido',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            8 => [
                'name' => 'situacao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            9 => [
                'name' => 'observacao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\OutrasOrigensInteracoes\\Validator' => [
            0 => [
                'name' => 'outra_origem',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            4 => [
                'name' => 'id_origem_pai',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'outras_origens_interacoes',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'is_pai',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\ArquivoUpload\\Validator' => [
            0 => [
                'name' => 'usuario_upload__id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'chamado_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'chamado',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'nome',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'path',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            5 => [
                'name' => 'tipo',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            6 => [
                'name' => 'descricao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '300',
                        ],
                    ],
                ],
            ],
            7 => [
                'name' => 'data_upload',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            8 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\ProdutosCategorias\\Validator' => [
            0 => [
                'name' => 'categoria',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\Perfil\\Validator' => [
            0 => [
                'name' => 'perfil',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbNoRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'perfil',
                            'field' => 'perfil',
                        ],
                    ],
                    1 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '45',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'descricao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '65535',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            5 => [
                'name' => 'rota_inicial',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '1000',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\Urls\\Validator' => [
            0 => [
                'name' => 'url',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '200',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\TesteTiago\\Validator' => [
            0 => [
                'name' => 'text',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\Sites\\Validator' => [
            0 => [
                'name' => 'urls_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'urls',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'site',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '50',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'date_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            5 => [
                'name' => 'origem_leads',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            6 => [
                'name' => 'cidades_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'cidades',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\TelefonesContato\\Validator' => [
            0 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'telefone',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '20',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            3 => [
                'name' => 'data_edicao',
                'required' => false,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            5 => [
                'name' => 'operadora_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'operadoras_telefones',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\VersaoItens\\Validator' => [
            0 => [
                'name' => 'versao_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'versao',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'tipo',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '1',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\Versao\\Validator' => [
            0 => [
                'name' => 'versao',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '20',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_versao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'descricao',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\StatusChamado\\Validator' => [
            0 => [
                'name' => 'status_chamado',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '250',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'data_criacao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            2 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
        ],
        'CRM\\V1\\Rest\\Sprint\\Validator' => [
            0 => [
                'name' => 'descricao',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            1 => [
                'name' => 'data_inicio',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'data_fim',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StringTrim::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => \Zend\Validator\StringLength::class,
                        'options' => [
                            'min' => 1,
                            'max' => '255',
                        ],
                    ],
                ],
            ],
        ],
        'CRM\\V1\\Rest\\VendaProdutoContato\\Validator' => [
            0 => [
                'name' => 'usuario_venda_id',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'usuarios',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            1 => [
                'name' => 'contato_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'contatos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            2 => [
                'name' => 'produtos_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'produtos',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
            3 => [
                'name' => 'data_venda',
                'required' => true,
                'filters' => [],
                'validators' => [],
            ],
            4 => [
                'name' => 'status',
                'required' => true,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [],
            ],
            5 => [
                'name' => 'interacao_pai_id',
                'required' => false,
                'filters' => [
                    0 => [
                        'name' => \Zend\Filter\StripTags::class,
                    ],
                    1 => [
                        'name' => \Zend\Filter\Digits::class,
                    ],
                ],
                'validators' => [
                    0 => [
                        'name' => 'ZF\\ContentValidation\\Validator\\DbRecordExists',
                        'options' => [
                            'adapter' => 'allcross_crm',
                            'table' => 'interacoes_contato',
                            'field' => 'id',
                        ],
                    ],
                ],
            ],
        ],
    ],
    'service_manager' => [
        'factories' => [
            \CRM\V1\Rest\Gesto_nacional_dash_board\Gesto_nacional_dash_boardResource::class => \CRM\V1\Rest\Gesto_nacional_dash_board\Gesto_nacional_dash_boardResourceFactory::class,
        ],
    ],
    'zf-mvc-auth' => [
        'authorization' => [
            'CRM\\V1\\Rest\\Gesto_nacional_dash_board\\Controller' => [
                'collection' => [
                    'GET' => true,
                    'POST' => false,
                    'PUT' => false,
                    'PATCH' => false,
                    'DELETE' => false,
                ],
                'entity' => [
                    'GET' => true,
                    'POST' => false,
                    'PUT' => false,
                    'PATCH' => false,
                    'DELETE' => false,
                ],
            ],
        ],
    ],
];
