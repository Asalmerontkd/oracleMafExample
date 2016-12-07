package antonio.mobile;

import java.util.Date;

import oracle.adfmf.java.beans.PropertyChangeListener;
import oracle.adfmf.java.beans.PropertyChangeSupport;

public class Emp {
    private PropertyChangeSupport _propertyChangeSupport = new PropertyChangeSupport(this);

    public Emp() {
        super();
    }

    public void setName(String name) {
        String oldName = this.name;
        this.name = name;
        _propertyChangeSupport.firePropertyChange("name", oldName, name);
    }

    public String getName() {
        return name;
    }

    public void setEmail(String email) {
        String oldEmail = this.email;
        this.email = email;
        _propertyChangeSupport.firePropertyChange("email", oldEmail, email);
    }

    public String getEmail() {
        return email;
    }

    public void setSalary(int salary) {
        int oldSalary = this.salary;
        this.salary = salary;
        _propertyChangeSupport.firePropertyChange("salary", oldSalary, salary);
    }

    public int getSalary() {
        return salary;
    }

    public void setHireDate(Date hireDate) {
        Date oldHireDate = this.hireDate;
        this.hireDate = hireDate;
        _propertyChangeSupport.firePropertyChange("hireDate", oldHireDate, hireDate);
    }

    public Date getHireDate() {
        return hireDate;
    }
    private String name;
    private String email;
    private int salary;
    private Date hireDate;
    
    public Emp(String name, String email) {
         super();
         this.name = name;
         this.email = email; 
    } 

    public Emp(String name, String email, int salary, Date hireDate) {
        super();
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    public void addPropertyChangeListener(PropertyChangeListener l) {
        _propertyChangeSupport.addPropertyChangeListener(l);
    }

    public void removePropertyChangeListener(PropertyChangeListener l) {
        _propertyChangeSupport.removePropertyChangeListener(l);
    }
}
