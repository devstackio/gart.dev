import React from 'react';

import Accordion from 'component/basic/Accordion'

const JPACrud101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>JPACrud 101</h3>

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1"
      header = 'build.gradle'
      content = ''
      code = {`
      plugins {
        id 'org.springframework.boot' version '2.2.4.RELEASE'
        id 'io.spring.dependency-management' version '1.0.9.RELEASE'
        id 'java'
      }
      
      group = 'dev.gart'
      version = '0.0.1-SNAPSHOT'
      sourceCompatibility = '1.8'
      
      repositories {
        mavenCentral()
      }
      
      dependencies {
        implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
        implementation 'org.springframework.boot:spring-boot-starter-web'
        runtimeOnly 'org.postgresql:postgresql'
        testImplementation('org.springframework.boot:spring-boot-starter-test') {
          exclude group: 'org.junit.vintage', module: 'junit-vintage-engine'
        }
      }
      
      test {
        useJUnitPlatform()
      }
      
      `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'application.properties'
      content = 'postgres version : 9.6, database name : dev'
      code = {`---
spring.datasource.url=jdbc:postgresql://127.0.0.1:5432/dev
spring.datasource.username=postgres
spring.datasource.password=tester
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=org.postgresql.Driver
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="3" 
      header = 'devtable model'
      content = 'devtable table has 3 columns id (primary key) username ( character varying ) and password ( character varying )'
      code = {`
dev.gart.postgresdemo.model

@Entity
@Table(name="devtable")
public class Devtable implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    Long id;

    @Column(name="password")
    String password;

    @Column(name="username")
    String username;
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="4" 
        header = 'DevtableRepository'
        content = 'extends from JpaRepository to inherit default CRUD methods'
        code = {`
package dev.gart.postgresdemo.repository;

import dev.gart.postgresdemo.model.Devtable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DevtableRepository extends JpaRepository<Devtable, Long> {
}
          `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="5" 
              header = 'DevtableController'
              content = 'controller... usually put a service in here as autowired and call repository through service...'
              code = {`
              package dev.gart.postgresdemo.controller;

              import dev.gart.postgresdemo.model.Devtable;
              import dev.gart.postgresdemo.repository.DevtableRepository;
              import org.springframework.beans.factory.annotation.Autowired;
              import org.springframework.data.domain.Page;
              import org.springframework.data.domain.Pageable;
              import org.springframework.web.bind.annotation.GetMapping;
              import org.springframework.web.bind.annotation.PostMapping;
              import org.springframework.web.bind.annotation.RequestBody;
              import org.springframework.web.bind.annotation.RestController;
              
              import javax.validation.Valid;
              
              @RestController
              public class DevtableController {
              
                  @Autowired
                  DevtableRepository devtableRepository;
              
                  @GetMapping("/devtables")
                  public Page<Devtable> getDevtables(Pageable pageable) {
                      System.out.println("returning : " + devtableRepository.findAll().size() + " results...");
                      return devtableRepository.findAll(pageable);
                  }
              
                  @PostMapping("/devtables")
                  public Devtable createDevtable(@Valid @RequestBody Devtable devtable) {
                      return devtableRepository.save(devtable);
                  }
              }
              
                `}
            />

      
    </>
  )
}

export default JPACrud101;